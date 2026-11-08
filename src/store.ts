import { create } from 'zustand'
import tagRemap from './tagRemap.json'

interface Pub {
  url?: string
  doi: string
  year?: number
  citations?: number
}

export interface Tool {
  name: string
  url?: string
  tags?: string[]
  img?: string
  width?: number
  height?: number
  github?: string
  twitter?: string
  github_stars?: number
  pub?: Pub
  note?: string
  alt_url?: string
}

export type SortBy = 'added' | 'year' | 'citations' | 'stars'

export interface Sort {
  by: SortBy
  dir: 1 | -1
}

type Mode = 'list' | 'grid'

interface AppState {
  mode: Mode
  tag?: string
  sort: Sort
  setMode: (mode: Mode) => void
  setSort: (sort: Sort) => void
  setTag: (tag?: string) => void
}

const defaultSort: Sort = { by: 'added', dir: -1 }

const params = new URLSearchParams(window.location.search)

function param(name: string) {
  const value = params.get(name)
  return value === null || value === '' ? undefined : value
}

function parseSort(): Sort {
  for (const by of ['year', 'citations', 'stars'] as const) {
    const dir = params.get(by)
    if (dir === '1' || dir === '-1') {
      return { by, dir: dir === '1' ? 1 : -1 }
    }
  }
  return params.get('latest') === 'false'
    ? { by: 'added', dir: 1 }
    : defaultSort
}

function parseTag() {
  const replacements: Partial<Record<string, string[]>> = tagRemap
  const tag = param('tag')
  const language = param('language')
  const platform = param('platform')
  if (tag !== undefined) {
    return replacements[tag]?.[0] ?? tag
  }
  if (language !== undefined) {
    return `stack:${language}`
  }
  return platform !== undefined ? `platform:${platform}` : undefined
}

const legacySelected = param('selected')
if (legacySelected !== undefined) {
  window.location.hash = legacySelected.replace(/^#/, '')
}

export const useAppStore = create<AppState>()(set => ({
  mode: params.get('mode') === 'grid' ? 'grid' : 'list',
  tag: parseTag(),
  sort: parseSort(),
  setMode: mode => {
    set({ mode })
  },
  setSort: sort => {
    set({ sort })
  },
  setTag: tag => {
    set({ tag })
  },
}))

function toSearch({ mode, tag, sort }: AppState) {
  const p = new URLSearchParams()
  if (tag !== undefined) {
    p.set('tag', tag)
  }
  if (sort.by === 'added') {
    if (sort.dir === 1) {
      p.set('latest', 'false')
    }
  } else {
    p.set(sort.by, String(sort.dir))
  }
  if (mode === 'grid') {
    p.set('mode', mode)
  }
  return p.size ? `?${p}` : ''
}

export function tagHref(tag: string) {
  return `?${new URLSearchParams({ tag })}`
}

function syncUrl(state: AppState) {
  const { pathname, hash } = window.location
  window.history.replaceState(null, '', pathname + toSearch(state) + hash)
}

syncUrl(useAppStore.getState())
useAppStore.subscribe(syncUrl)
