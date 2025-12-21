'use client'

import { ContentTag } from '@/types/content'
import { TagChip } from './TagChip'
import { FaSearch, FaTimes } from 'react-icons/fa'

interface ContentFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedTags: ContentTag[]
  onTagToggle: (tag: ContentTag) => void
  onClearFilters: () => void
  resultCount: number
  totalCount: number
}

const ALL_TAGS: ContentTag[] = ['AI', 'Engineering', 'Product', 'Productivity', 'Analysis']

export function ContentFilters({
  searchQuery,
  onSearchChange,
  selectedTags,
  onTagToggle,
  onClearFilters,
  resultCount,
  totalCount
}: ContentFiltersProps) {
  const hasActiveFilters = searchQuery.length > 0 || selectedTags.length > 0

  return (
    <div className="space-y-4">
      {/* Search input */}
      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-white/5 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-400 border border-white/10 focus:border-green-400 focus:outline-none transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-gray-400 mr-1">Filter:</span>
        {ALL_TAGS.map((tag) => (
          <TagChip
            key={tag}
            tag={tag}
            size="md"
            isActive={selectedTags.includes(tag)}
            onClick={() => onTagToggle(tag)}
          />
        ))}

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="ml-2 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            <FaTimes className="w-3 h-3" />
            Clear
          </button>
        )}
      </div>

      {/* Result count */}
      {hasActiveFilters && (
        <p className="text-sm text-gray-400">
          Showing {resultCount} of {totalCount} posts
        </p>
      )}
    </div>
  )
}
