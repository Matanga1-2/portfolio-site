'use client'

import { ContentTag } from '@/types/content'
import { motion } from 'framer-motion'

interface TagChipProps {
  tag: ContentTag
  isActive?: boolean
  onClick?: () => void
  size?: 'sm' | 'md'
}

const tagColors: Record<ContentTag, { bg: string; text: string; activeBg: string }> = {
  'Productivity': {
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-300',
    activeBg: 'bg-yellow-500/30 border-yellow-400'
  },
  'Engineering': {
    bg: 'bg-blue-500/10',
    text: 'text-blue-300',
    activeBg: 'bg-blue-500/30 border-blue-400'
  },
  'Product': {
    bg: 'bg-purple-500/10',
    text: 'text-purple-300',
    activeBg: 'bg-purple-500/30 border-purple-400'
  },
  'AI': {
    bg: 'bg-green-500/10',
    text: 'text-green-300',
    activeBg: 'bg-green-500/30 border-green-400'
  },
  'Analysis': {
    bg: 'bg-orange-500/10',
    text: 'text-orange-300',
    activeBg: 'bg-orange-500/30 border-orange-400'
  }
}

export function TagChip({ tag, isActive = false, onClick, size = 'sm' }: TagChipProps) {
  const colors = tagColors[tag]
  const isClickable = !!onClick

  const sizeClasses = size === 'sm'
    ? 'px-2 py-0.5 text-xs'
    : 'px-3 py-1 text-sm'

  const baseClasses = `
    inline-flex items-center rounded-full font-medium transition-all
    ${sizeClasses}
    ${colors.text}
    ${isActive ? colors.activeBg : colors.bg}
    ${isActive ? 'border' : 'border border-transparent'}
    ${isClickable ? 'cursor-pointer hover:scale-105' : ''}
  `

  if (isClickable) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        className={baseClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {tag}
      </motion.button>
    )
  }

  return (
    <span className={baseClasses}>
      {tag}
    </span>
  )
}
