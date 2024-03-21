export interface Tool {
  name: string
  url?: string
  language?: string[]
  tags?: string[]
  img?: string
  width?: number
  height?: number
  github?: string
  twitter?: string
  platform?: string[]
  github_stars?: number
  pub?: {
    url?: string
    doi: string
    year?: number
    citations?: number
  }
  note?: string
  alt_url?: string
  interactive?: string[]
}
