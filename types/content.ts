export type ContentTag =
  | 'Productivity'
  | 'Engineering'
  | 'Product'
  | 'AI'
  | 'Analysis'

export type ContentSource = 'Blog' | 'Port' | 'TheNewStack'

export interface ContentItem {
  id: string
  title: string
  subtitle: string
  date: Date
  formattedDate: string
  tags: ContentTag[]
  url: string
  source: ContentSource
}
