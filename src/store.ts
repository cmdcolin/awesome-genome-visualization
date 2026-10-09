import { create } from 'zustand'
import queryString from 'query-string'
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
interface SortState {
  citations?: number
  year?: number
  stars?: number
  latest?: boolean
}
interface FilterState {
  tag?: string
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

const {
  selected,
  language,
  tag,
  platform,
  mode,
  latest,
  citations,
  year,
  stars,
} = queryString.parse(window.location.search)

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
function remapLegacyTag(tag?: string) {
  const replacements: Partial<Record<string, string[]>> = tagRemap
  return replacements[tag ?? '']?.[0] ?? tag
}
function legacyFilterTag(tag?: string, language?: string, platform?: string) {
  if (tag) {
    return tag
  }
  if (language) {
    return `stack:${language}`
  }
  return platform ? `platform:${platform}` : undefined
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
    tag: legacyFilterTag(
      remapLegacyTag(coerceString(tag)),
      coerceString(language),
      coerceString(platform),
    ),
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
