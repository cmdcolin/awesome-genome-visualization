import { execSync } from 'child_process'
import fs from 'fs'

export async function fetchJSON(
  url: string,
  args: RequestInit & { timeout?: number; retries?: number } = {},
) {
  const { timeout = 30000, retries = 3, ...fetchArgs } = args
  let lastError: any

  for (let i = 0; i <= retries; i++) {
    const controller = new AbortController()
    const id = setTimeout(() => controller.abort(), timeout)
    try {
      const res = await fetch(url, { ...fetchArgs, signal: controller.signal })
      if (res.status === 429) {
        const retryAfter = res.headers.get('Retry-After')
        const wait = retryAfter
          ? parseInt(retryAfter) * 1000
          : Math.pow(2, i) * 1000
        console.warn(
          `Rate limited (429) on ${url}. Waiting ${wait}ms before retry ${i + 1}/${retries}...`,
        )
        await new Promise(resolve => setTimeout(resolve, wait))
        continue
      }
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${await res.text()}`)
      }
      return await res.json()
    } catch (e: any) {
      lastError = e
      if (
        i < retries &&
        (e.name === 'AbortError' || e.message.includes('fetch'))
      ) {
        const wait = Math.pow(2, i) * 1000
        await new Promise(resolve => setTimeout(resolve, wait))
        continue
      }
      throw e
    } finally {
      clearTimeout(id)
    }
  }
  throw lastError
}

export function runCommand(command: string) {
  try {
    return execSync(command, { encoding: 'utf8' })
  } catch (e: any) {
    throw new Error(`Command failed: ${command}\n${e.stderr || e.message}`)
  }
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function getOwnerRepo(url: string) {
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/)
  if (match) {
    const owner = match[1]
    const repo = match[2].replace(/\.git$/, '').replace(/\/$/, '')
    return { owner, repo }
  }
  return undefined
}

export function getRawDoi(doi: string) {
  return doi
    .replace('https://doi.org/', '')
    .replace('http://doi.org/', '')
    .replace('https://dx.doi.org/', '')
    .replace('http://dx.doi.org/', '')
}

export function readJSON(file: string) {
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}

export function readTOOLS() {
  return JSON.parse(fs.readFileSync('TOOLS.json', 'utf8')) as {
    tools: {
      name: string
      github?: string
      github_stars?: number
      url?: string
      pub?: { doi: string; year?: number; citations?: number }
    }[]
  }
}

export function pLimit(concurrency: number) {
  let active = 0
  const queue: (() => void)[] = []

  const next = () => {
    if (queue.length > 0) {
      queue.shift()!()
    } else {
      active--
    }
  }

  return async <T>(fn: () => Promise<T>): Promise<T> => {
    if (active >= concurrency) {
      await new Promise<void>(resolve => queue.push(resolve))
    } else {
      active++
    }
    try {
      const result = await fn()
      return result
    } finally {
      next()
    }
  }
}
