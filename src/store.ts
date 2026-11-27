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

export type SortBy = 'added' | 'name' | 'year' | 'citations' | 'stars'

export interface Sort {
  by: SortBy
  dir: 1 | -1
}

type Mode = 'cards' | 'table'

interface AppState {
  mode: Mode
  tags: string[]
  query: string
  sort: Sort
  hideInactive: boolean
  setMode: (mode: Mode) => void
  setSort: (sort: Sort) => void
  setTags: (tags: string[]) => void
  addTag: (tag: string) => void
  removeTag: (tag: string) => void
  setQuery: (query: string) => void
  setHideInactive: (hideInactive: boolean) => void
}

const defaultSort: Sort = { by: 'added', dir: -1 }

const params = new URLSearchParams(window.location.search)

function param(name: string) {
  const value = params.get(name)
  return value === null || value === '' ? undefined : value
}

function parseSort(): Sort {
  for (const by of ['name', 'year', 'citations', 'stars'] as const) {
    const dir = params.get(by)
    if (dir === '1' || dir === '-1') {
      return { by, dir: dir === '1' ? 1 : -1 }
    }
  }
  return params.get('latest') === 'false'
    ? { by: 'added', dir: 1 }
    : defaultSort
}

function parseTags() {
  const replacements: Partial<Record<string, string[]>> = tagRemap
  const language = param('language')
  const platform = param('platform')
  const tags = params
    .getAll('tag')
    .filter(tag => tag !== '')
    .map(tag => replacements[tag]?.[0] ?? tag)
  return [
    ...new Set([
      ...tags,
      ...(language !== undefined ? [`stack:${language}`] : []),
      ...(platform !== undefined ? [`platform:${platform}`] : []),
    ]),
  ]
}

const legacySelected = param('selected')
if (legacySelected !== undefined) {
  window.location.hash = legacySelected.replace(/^#/, '')
}

export const useAppStore = create<AppState>()(set => ({
  mode:
    params.get('mode') === 'grid' || params.get('mode') === 'table'
      ? 'table'
      : 'cards',
  tags: parseTags(),
  query: param('q') ?? '',
  sort: parseSort(),
  hideInactive: params.get('hideInactive') === 'true',
  setMode: mode => {
    set({ mode })
  },
  setSort: sort => {
    set({ sort })
  },
  setTags: tags => {
    set({ tags })
  },
  addTag: tag => {
    set(state =>
      state.tags.includes(tag) ? state : { tags: [...state.tags, tag] },
    )
  },
  removeTag: tag => {
    set(state => ({ tags: state.tags.filter(t => t !== tag) }))
  },
  setQuery: query => {
    set({ query })
  },
  setHideInactive: hideInactive => {
    set({ hideInactive })
  },
}))

function toSearch({ mode, tags, query, sort, hideInactive }: AppState) {
  const p = new URLSearchParams()
  for (const tag of tags) {
    p.append('tag', tag)
  }
  if (query !== '') {
    p.set('q', query)
  }
  if (sort.by === 'added') {
    if (sort.dir === 1) {
      p.set('latest', 'false')
    }
  } else {
    p.set(sort.by, String(sort.dir))
  }
  if (hideInactive) {
    p.set('hideInactive', 'true')
  }
  if (mode === 'table') {
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
