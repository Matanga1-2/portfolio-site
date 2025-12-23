import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, X, ExternalLink } from "lucide-react";
import { Header } from "@/components/terminal/Header";
import { Footer } from "@/components/terminal/Footer";
import { sortedContentData, ALL_TAGS, ContentTag, ContentItem } from "@/data/content";

const ITEMS_PER_PAGE = 9;

const ContentCard = ({ item, index }: { item: ContentItem; index: number }) => {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group bg-card border border-border p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-mono text-muted-foreground">
          {item.source}
        </span>
        <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      {/* Title */}
      <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
        {item.title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
        {item.subtitle}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
        <span className="text-xs text-muted-foreground">{item.formattedDate}</span>
        <div className="flex gap-2">
          {item.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 border border-primary rounded text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const Content = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<ContentTag[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredContent = useMemo(() => {
    return sortedContentData.filter((item) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchLower) ||
        item.subtitle.toLowerCase().includes(searchLower) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchLower));

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => item.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const totalPages = Math.ceil(filteredContent.length / ITEMS_PER_PAGE);

  const paginatedContent = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredContent.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredContent, currentPage]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleTagToggle = (tag: ContentTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-primary text-sm">cat</span>
              <h1 className="text-3xl font-bold">./content</h1>
            </div>
            <p className="text-muted-foreground">
              Insights on Engineering, Product, AI, and Productivity
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border p-6 mb-8"
          >
            {/* Search */}
            <div className="relative mb-4">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-secondary border border-border pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {ALL_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`text-xs px-3 py-1 border transition-colors ${
                    selectedTags.includes(tag)
                      ? "bg-secondary text-foreground border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-primary"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>

            {/* Results count and clear */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>
                {filteredContent.length} of {sortedContentData.length} posts
              </span>
              {(searchQuery || selectedTags.length > 0) && (
                <button
                  onClick={handleClearFilters}
                  className="text-primary hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </motion.div>

          {/* Content Grid */}
          {paginatedContent.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {paginatedContent.map((item, index) => (
                <ContentCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No posts found matching your filters.</p>
              <button
                onClick={handleClearFilters}
                className="text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm border border-border hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ←
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 text-sm border transition-colors ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm border border-border hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Content;
