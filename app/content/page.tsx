'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { ContentCard } from '@/components/content/ContentCard'
import { ContentFilters } from '@/components/content/ContentFilters'
import { Pagination } from '@/components/content/Pagination'
import { sortedContentData } from '@/data/content'
import { ContentTag } from '@/types/content'
import { useScrollToTop } from '@/app/hooks/useScrollToTop'

const ITEMS_PER_PAGE = 9

export default function ContentPage() {
  useScrollToTop()

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<ContentTag[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const filteredContent = useMemo(() => {
    return sortedContentData.filter((item) => {
      const searchLower = searchQuery.toLowerCase()
      const matchesSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchLower) ||
        item.subtitle.toLowerCase().includes(searchLower) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchLower))

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => item.tags.includes(tag))

      return matchesSearch && matchesTags
    })
  }, [searchQuery, selectedTags])

  const totalPages = Math.ceil(filteredContent.length / ITEMS_PER_PAGE)

  const paginatedContent = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredContent.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredContent, currentPage])

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleTagToggle = (tag: ContentTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
    setCurrentPage(1)
  }

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedTags([])
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden bg-navy-primary">
      <Header />
      <main className="flex-grow container mx-auto px-2 sm:px-3 md:px-4 pt-14 sm:pt-18 md:pt-24 pb-10 sm:pb-14 md:pb-20">
        <div className="w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          {/* Header section */}
          <section className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Content
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12">
              Insights on Engineering, Product, AI, and Productivity
            </p>
          </section>

          {/* Filters section */}
          <section className="bg-white/5 rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-sm">
            <ContentFilters
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              selectedTags={selectedTags}
              onTagToggle={handleTagToggle}
              onClearFilters={handleClearFilters}
              resultCount={filteredContent.length}
              totalCount={sortedContentData.length}
            />
          </section>

          {/* Content grid */}
          <section>
            {paginatedContent.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {paginatedContent.map((item, index) => (
                  <ContentCard key={item.id} item={item} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No posts found matching your filters.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 text-green-400 hover:text-green-300 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
