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

function parseSort(): Sort {
  for (const by of ['year', 'citations', 'stars'] as const) {
    const dir = params.get(by)
    if (dir === '1' || dir === '-1') {
      return { by, dir: +dir as 1 | -1 }
    }
  }
  return params.get('latest') === 'false'
    ? { by: 'added', dir: 1 }
    : defaultSort
}

function parseTag() {
  const replacements: Partial<Record<string, string[]>> = tagRemap
  const tag = params.get('tag')
  const language = params.get('language')
  const platform = params.get('platform')
  if (tag) {
    return replacements[tag]?.[0] ?? tag
  }
  if (language) {
    return `stack:${language}`
  }
  return platform ? `platform:${platform}` : undefined
}

const legacySelected = params.get('selected')
if (legacySelected) {
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
  if (tag) {
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
