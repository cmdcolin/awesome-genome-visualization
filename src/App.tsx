import { useEffect } from 'react'
import { tools as importedTools } from './TOOLS.json'
import { type Sort, type SortBy, type Tool, useAppStore } from './store'
import styles from './App.module.css'

import TagFilters from './TagFilters'
import ToolCard from './ToolCard'
import ToolTable from './ToolTable'
import Link from './Link'
import Button from './Button'

const allTools: Tool[] = importedTools

const sortKeys: Record<
  Exclude<SortBy, 'added'>,
  (t: Tool) => number | undefined
> = {
  year: t => t.pub?.year,
  citations: t => t.pub?.citations,
  stars: t => t.github_stars,
}

function sortTools({ by, dir }: Sort) {
  if (by === 'added') {
    return dir === 1 ? allTools : allTools.toReversed()
  }
  const key = sortKeys[by]
  return allTools.toSorted((a, b) => {
    const ka = key(a)
    const kb = key(b)
    if (ka === undefined || kb === undefined) {
      return (ka === undefined ? 1 : 0) - (kb === undefined ? 1 : 0)
    }
    return (ka - kb) * dir
  })
}

function matches(tool: Tool, tags: string[], query: string) {
  const words = query
    .toLowerCase()
    .split(/\s+/)
    .filter(word => word !== '')
  const text = [tool.name, tool.note ?? '', ...(tool.tags ?? [])]
    .join(' ')
    .toLowerCase()
  return (
    tags.every(tag => tool.tags?.includes(tag) === true) &&
    words.every(word => text.includes(word))
  )
}

const sortOptions: [string, Sort][] = [
  ['Recently added', { by: 'added', dir: -1 }],
  ['Least recently added', { by: 'added', dir: 1 }],
  ['Newest publication', { by: 'year', dir: -1 }],
  ['Oldest publication', { by: 'year', dir: 1 }],
  ['Most citations', { by: 'citations', dir: -1 }],
  ['Fewest citations', { by: 'citations', dir: 1 }],
  ['Most GitHub stars', { by: 'stars', dir: -1 }],
  ['Fewest GitHub stars', { by: 'stars', dir: 1 }],
]

const sortValue = ({ by, dir }: Sort) => `${by}:${dir}`

const toolsUpdated = import.meta.env.VITE_TOOLS_UPDATED

const githubURL = 'https://github.com/cmdcolin/awesome-genome-visualization'

export default function App() {
  const mode = useAppStore(s => s.mode)
  const tags = useAppStore(s => s.tags)
  const query = useAppStore(s => s.query)
  const sort = useAppStore(s => s.sort)
  const setTags = useAppStore(s => s.setTags)
  const setQuery = useAppStore(s => s.setQuery)

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) {
      document.getElementById(id)?.scrollIntoView({ block: 'start' })
    }
  }, [])

  const filteredTools = sortTools(sort).filter(t => matches(t, tags, query))

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>awesome-genome-visualization</h1>
      <p>
        A list of {allTools.length} genome visualization tools, from the GitHub
        repo <Link href={githubURL}>{githubURL}</Link>. Pull requests that add
        tools are welcome.
      </p>
      {toolsUpdated !== undefined ? (
        <p className={styles.updated}>List last updated {toolsUpdated}</p>
      ) : null}

      <TagFilters tools={filteredTools} />
      <div className={styles.toolbar}>
        <SortSelect />
        <ModeSelector />
        <p className={styles.count} aria-live="polite">
          Showing {filteredTools.length} of {allTools.length} tools
        </p>
      </div>

      {filteredTools.length === 0 ? (
        <p>
          No tools match.{' '}
          <Button
            onClick={() => {
              setTags([])
              setQuery('')
            }}
          >
            Clear filters
          </Button>
        </p>
      ) : mode === 'cards' ? (
        <div className={styles.listContainer}>
          {filteredTools.map(tool => (
            <ToolCard tool={tool} key={tool.name} />
          ))}
        </div>
      ) : (
        <ToolTable tools={filteredTools} />
      )}
      <p>
        Note: if you would like your tool removed or screenshot removed (for
        copyright purposes for example) let me know
      </p>
    </div>
  )
}

function ModeSelector() {
  const mode = useAppStore(s => s.mode)
  const setMode = useAppStore(s => s.setMode)
  return (
    <fieldset className={styles.controls}>
      <legend className={styles.legend}>View</legend>
      {(['cards', 'table'] as const).map(m => (
        <label key={m} className={styles.label}>
          <input
            type="radio"
            name="mode"
            checked={mode === m}
            onChange={() => {
              setMode(m)
            }}
          />
          {m === 'cards' ? 'Cards' : 'Table'}
        </label>
      ))}
    </fieldset>
  )
}

function SortSelect() {
  const sort = useAppStore(s => s.sort)
  const setSort = useAppStore(s => s.setSort)
  return (
    <div className={styles.controls}>
      <label htmlFor="sort" className={styles.legend}>
        Sort
      </label>
      <select
        id="sort"
        value={sortValue(sort)}
        onChange={event => {
          const option = sortOptions.find(
            ([, s]) => sortValue(s) === event.target.value,
          )
          if (option) {
            setSort(option[1])
          }
        }}
      >
        {sortOptions.map(([label, s]) => (
          <option key={label} value={sortValue(s)}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}
