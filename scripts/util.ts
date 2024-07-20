import fs from 'fs'

export async function fetchJSON(url: string, args: RequestInit) {
  const res = await fetch(url, args)
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${await res.text()}`)
  }
  return res.json()
}

export function readJSON(file: string) {
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}

export function readTOOLS() {
  return JSON.parse(fs.readFileSync('src/TOOLS.json', 'utf8')) as {
    tools: {
      name: string
      github?: string
      github_stars?: number
      url?: string
      pub?: { doi: string; year?: number; citations?: number }
    }[]
  }
}
