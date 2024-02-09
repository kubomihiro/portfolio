export type Content = {
  title?: string
  description?: string
  category?: string
  content?: string
  publishedAt: string
  eyecatch: {
    url: string
    alt: string
    height: number
    width: number
  }
}
