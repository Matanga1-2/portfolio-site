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
      <div className="min-h-screen bg-background text-foreground font-blog antialiased">
        <Header />
        <main className="container mx-auto px-4 pt-24 pb-20">
          <div className="max-w-2xl mx-auto text-center text-muted-foreground">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground font-blog antialiased">
        <Header />
        <main className="container mx-auto px-4 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
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
    <motion.div className="min-h-screen bg-background text-foreground font-blog antialiased">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Link
                to="/content"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-primary">~</span>/content
              </Link>
            </motion.div>

            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4 mb-10"
              dir={textDir}
              lang={lang}
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <time className="font-mono">{article.formattedDate}</time>
                <span>·</span>
                <span>{author}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-foreground">
                {title}
              </h1>
              <p className="text-muted-foreground text-xl font-semibold leading-relaxed">{subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.header>

            <article dir={textDir} lang={lang} className="blog-prose">
              <Component components={mdxComponents} />
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default BlogPost;
