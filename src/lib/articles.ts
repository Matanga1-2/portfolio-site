import type { ComponentType } from "react";
import type { ContentItem, ContentTag } from "@/data/content";

export interface ArticleFrontmatter {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  lang: "en" | "he";
  tags: ContentTag[];
}

export interface ArticleMeta {
  slug: string;
  frontmatter: ArticleFrontmatter;
  formattedDate: string;
  date: Date;
}

export interface Article extends ArticleMeta {
  Component: ComponentType;
}

type MdxModule = {
  default: ComponentType;
  frontmatter: ArticleFrontmatter;
};

const articleFrontmatter = import.meta.glob<ArticleFrontmatter>(
  "../content/articles/*.mdx",
  { eager: true, import: "frontmatter" }
);

const lazyArticleModules = import.meta.glob<MdxModule>("../content/articles/*.mdx");

function extractSlug(path: string): string {
  const match = path.match(/\/([^/]+)\.mdx$/);
  return match?.[1] ?? "";
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function parseArticleMeta(path: string, frontmatter: ArticleFrontmatter): ArticleMeta {
  const date = new Date(frontmatter.date);

  return {
    slug: extractSlug(path),
    frontmatter,
    date,
    formattedDate: formatDate(frontmatter.date),
  };
}

const allArticleMeta: ArticleMeta[] = Object.entries(articleFrontmatter)
  .map(([path, frontmatter]) => parseArticleMeta(path, frontmatter))
  .sort((a, b) => b.date.getTime() - a.date.getTime());

export function getAllArticles(): ArticleMeta[] {
  return allArticleMeta;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const path = `../content/articles/${slug}.mdx`;
  const loader = lazyArticleModules[path];

  if (!loader) {
    return null;
  }

  const module = await loader();
  const meta = parseArticleMeta(path, module.frontmatter);

  return {
    ...meta,
    Component: module.default,
  };
}

export function articleToContentItem(article: ArticleMeta): ContentItem {
  return {
    id: article.slug,
    title: article.frontmatter.title,
    subtitle: article.frontmatter.subtitle,
    date: article.date,
    formattedDate: article.formattedDate,
    tags: article.frontmatter.tags,
    url: `/content/${article.slug}`,
    source: "Blog",
  };
}

export function getArticleContentItems(): ContentItem[] {
  return allArticleMeta.map(articleToContentItem);
}
