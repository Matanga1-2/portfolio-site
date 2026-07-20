import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/terminal/Header";
import { Footer } from "@/components/terminal/Footer";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { getArticleBySlug, type Article } from "@/lib/articles";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null | undefined>(undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!slug) {
      setArticle(null);
      return;
    }

    let cancelled = false;
    setArticle(undefined);

    getArticleBySlug(slug)
      .then((result) => {
        if (!cancelled) {
          setArticle(result);
        }
      })
      .catch((error) => {
        console.error("Failed to load article:", error);
        if (!cancelled) {
          setArticle(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (article === undefined) {
    return (
      <div className="min-h-screen bg-background text-foreground font-mono">
        <Header />
        <main className="container mx-auto px-4 pt-24 pb-20">
          <motion.div className="max-w-3xl mx-auto text-center text-muted-foreground">
            Loading...
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground font-mono">
        <Header />
        <main className="container mx-auto px-4 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-muted-foreground mb-4">Article not found.</p>
            <Link to="/content" className="text-primary hover:underline">
              ← Back to content
            </Link>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  const { frontmatter, Component } = article;
  const { title, subtitle, author, lang, tags } = frontmatter;
  const textDir = lang === "he" ? "rtl" : "ltr";

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Link
                to="/content"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-primary">~</span>/content
              </Link>
            </motion.div>

            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10"
              dir={textDir}
              lang={lang}
            >
              <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                {title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">{subtitle}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  {author}
                </span>
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  {article.formattedDate}
                </span>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.header>

            <article
              dir={textDir}
              lang={lang}
              className="prose prose-invert prose-base max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-p:text-foreground prose-p:leading-relaxed
                prose-li:text-foreground prose-strong:text-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            >
              <Component components={mdxComponents} />
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
