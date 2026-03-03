import { create } from 'zustand'

interface Pub {
  url?: string
  doi: string
  year?: number
  citations?: number
}

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
  pub?: Pub
  note?: string
  alt_url?: string
  interactive?: string[]
}
interface SortState {
  citations?: number
  year?: number
  stars?: number
  latest?: boolean
}
interface FilterState {
  language?: string
  tag?: string
  platform?: string
  interactive?: string
}
interface AppState {
  mode: string
  filters: FilterState
  sort: SortState
  selected?: string
  setMode: (arg: string) => void
  setSort: (arg: SortState) => void
  setFilters: (arg: FilterState) => void
  setSelected: (arg?: string) => void
}

const params = new URLSearchParams(window.location.search)
const selected = params.get('selected')
const language = params.get('language')
const tag = params.get('tag')
const platform = params.get('platform')
const interactive = params.get('interactive')
const mode = params.get('mode')
const latest = params.get('latest')
const citations = params.get('citations')
const year = params.get('year')
const stars = params.get('stars')

export function getBool(key: string, def = false): boolean {
  try {
    return JSON.parse(
      localStorage.getItem(key) ?? JSON.stringify(def),
    ) as boolean
  } catch (error) {
    console.error(error)
    return def
  }
}

export function setBool(key: string, val: boolean) {
  localStorage.setItem(key, JSON.stringify(val))
}

export function getStringArray(key: string, def = [] as string[]): string[] {
  try {
    return JSON.parse(
      localStorage.getItem(key) ?? JSON.stringify(def),
    ) as string[]
  } catch (error) {
    console.error(error)
    return def
  }
}

function coerceNumber(argument: unknown) {
  return argument ? Number(argument) : undefined
}
function coerceString(argument: unknown) {
  return argument ? String(argument) : undefined
}
function coerceBoolean(argument: unknown) {
  return argument ? (JSON.parse(`${argument}`) as boolean) : undefined
}

export function setStringArray(key: string, val: string[]) {
  localStorage.setItem(key, JSON.stringify(val))
}

export const useAppStore = create<AppState>()(set => ({
  mode: coerceString(mode) ?? 'list',
  filters: {
    language: coerceString(language),
    tag: coerceString(tag),
    platform: coerceString(platform),
    interactive: coerceString(interactive),
  },
  selected: coerceString(selected),
  sort: {
    latest: coerceBoolean(latest) ?? true,
    citations: coerceNumber(citations),
    stars: coerceNumber(stars),
    year: coerceNumber(year),
  },
  setMode: mode => {
    set(() => ({ mode }))
  },
  setSort: sort => {
    set(() => ({ sort }))
  },
  setFilters: filters => {
    set(() => ({ filters }))
  },
  setSelected: selected => {
    set(() => ({ selected }))
  },
}))
