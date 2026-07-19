import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/terminal/Header";
import { Footer } from "@/components/terminal/Footer";
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

    getArticleBySlug(slug).then((result) => {
      if (!cancelled) {
        setArticle(result);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (article === undefined) {
    return (
      <motion.div className="min-h-screen bg-background text-foreground font-mono">
        <Header />
        <main className="container mx-auto px-4 pt-24 pb-20">
          <div className="max-w-4xl mx-auto text-center text-muted-foreground">
            Loading...
          </div>
        </main>
        <Footer />
      </motion.div>
    );
  }

  if (!article) {
    return (
      <motion.div className="min-h-screen bg-background text-foreground font-mono">
        <Header />
        <main className="container mx-auto px-4 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-muted-foreground mb-4">Article not found.</p>
            <Link to="/content" className="text-primary hover:underline">
              ← Back to content
            </Link>
          </motion.div>
        </main>
        <Footer />
      </motion.div>
    );
  }

  const { frontmatter, Component } = article;
  const { title, subtitle, author, lang, tags } = frontmatter;
  const textDir = lang === "he" ? "rtl" : "ltr";

  return (
    <motion.div className="min-h-screen bg-background text-foreground font-mono">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
              dir={textDir}
              lang={lang}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-sm">$</span>
                <h1 className="text-2xl md:text-3xl font-bold">
                  cat <span className="text-primary">{article.slug}</span>.md
                </h1>
              </div>
              <h2 className="text-xl font-bold ml-6 mb-2">{title}</h2>
              <p className="text-muted-foreground text-lg ml-6">{subtitle}</p>
              <div className="flex flex-wrap gap-2 mt-4 ml-6">
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
            </motion.div>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-6"
            >
              <article
                dir={textDir}
                lang={lang}
                className="prose prose-invert prose-sm max-w-none prose-headings:text-primary prose-headings:font-bold prose-p:text-muted-foreground prose-a:text-primary prose-li:text-muted-foreground"
              >
                <Component />
              </article>
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default BlogPost;
