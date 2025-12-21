import { ContentTag } from '@/types/content'

const tagKeywords: Record<ContentTag, string[]> = {
  'AI': [
    'ai', 'artificial intelligence', 'genai', 'machine learning',
    'llm', 'gpt', 'context engineering', 'agent', 'mcp', 'prompt'
  ],
  'Engineering': [
    'code', 'coding', 'developer', 'software', 'api', 'architecture',
    'technical', 'system', 'git', 'testing', 'production', 'deployment',
    'infrastructure', 'server', 'database', 'etl', 'cache',
    'event-driven', 'micro-frontend', 'conway', 'deadlock', 'idempotent',
    'availability', 'terraform', 'kubernetes', 's3', 'bucket'
  ],
  'Product': [
    'product', 'feature', 'roadmap', 'stakeholder', 'user', 'customer',
    'okr', 'kpi', 'metrics', 'debt', 'build vs buy', 'decision',
    'priorit', 'alignment', 'collaboration', 'citizenship', 'subdomain'
  ],
  'Productivity': [
    'productivity', 'efficiency', 'inbox zero', 'deep work', 'focus',
    'knowledge', 'waste', 'lean', 'kanban', 'resourcefulness',
    'workflow', 'golden path', 'automation', 'batch'
  ],
  'Analysis': [
    'analysis', 'metric', 'data', 'insight', 'measure', 'risk',
    'tradeoff', 'strategy', 'planning', 'johari', 'five whys',
    'decision log', 'incident', 'context'
  ]
}

export function assignTags(title: string, subtitle: string): ContentTag[] {
  const combinedText = `${title} ${subtitle}`.toLowerCase()
  const assignedTags: ContentTag[] = []

  for (const [tag, keywords] of Object.entries(tagKeywords)) {
    const hasMatch = keywords.some(keyword =>
      combinedText.includes(keyword.toLowerCase())
    )
    if (hasMatch) {
      assignedTags.push(tag as ContentTag)
    }
  }

  if (assignedTags.length === 0) {
    assignedTags.push('Product')
  }

  const priorityOrder: ContentTag[] = ['AI', 'Engineering', 'Product', 'Productivity', 'Analysis']
  return assignedTags
    .sort((a, b) => priorityOrder.indexOf(a) - priorityOrder.indexOf(b))
    .slice(0, 3)
}

export function generateSubstackUrl(postId: string): string {
  const slug = postId.split('.').slice(1).join('.')
  return `https://blog.matangr.com/p/${slug}`
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
