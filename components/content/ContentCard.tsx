'use client'

import { ContentItem } from '@/types/content'
import { TagChip } from './TagChip'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface ContentCardProps {
  item: ContentItem
  index: number
}

export function ContentCard({ item, index }: ContentCardProps) {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: 'easeOut'
      }}
      whileHover={{ scale: 1.02 }}
      className="group relative block bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors cursor-pointer"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-green-900/20"></div>
      </div>

      <div className="relative z-10 p-4 sm:p-5 md:p-6 flex flex-col h-full min-h-[200px] sm:min-h-[220px]">
        {/* Header: Title + External link icon */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3
            className="text-sm sm:text-base font-semibold text-white leading-tight line-clamp-2 group-hover:text-green-400 transition-colors"
            title={item.title}
          >
            {item.title}
          </h3>
          <FaExternalLinkAlt className="text-gray-400 group-hover:text-green-400 transition-colors flex-shrink-0 w-3 h-3 mt-1" />
        </div>

        {/* Subtitle with tooltip on hover */}
        <p
          className="text-xs sm:text-sm text-gray-300 line-clamp-3 flex-grow mb-4"
          title={item.subtitle}
        >
          {item.subtitle}
        </p>

        {/* Footer: Tags on top, Date below aligned left */}
        <div className="mt-auto space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <TagChip key={tag} tag={tag} size="sm" />
            ))}
          </div>
          <span className="text-xs text-gray-400 block">{item.formattedDate}</span>
        </div>
      </div>
    </motion.a>
  )
}
