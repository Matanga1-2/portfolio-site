export type ContentTag =
  | 'Productivity'
  | 'Engineering'
  | 'Product'
  | 'AI'
  | 'Analysis'

export interface ContentItem {
  id: string
  title: string
  subtitle: string
  date: Date
  formattedDate: string
  tags: ContentTag[]
  url: string
}
