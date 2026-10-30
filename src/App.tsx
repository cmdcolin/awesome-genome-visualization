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

const sortButtons: [string, Sort][] = [
  ['Recently added', { by: 'added', dir: -1 }],
  ['Least recently added', { by: 'added', dir: 1 }],
  ['Year (dec)', { by: 'year', dir: -1 }],
  ['Year (asc)', { by: 'year', dir: 1 }],
  ['Number citations (dec)', { by: 'citations', dir: -1 }],
  ['Number citations (asc)', { by: 'citations', dir: 1 }],
  ['Github stars (dec)', { by: 'stars', dir: -1 }],
  ['Github stars (asc)', { by: 'stars', dir: 1 }],
]

const filterButtons: [string, string][] = [
  ['General-purpose genome browsers', 'kind:Genome browser'],
  ['Synteny/comparative browsers', 'field:Comparative genomics'],
  ['Dotplot viewer', 'view:Dotplot'],
  ['MSA viewer', 'data:MSA'],
  ['Graph genome', 'data:Genome graph'],
  ['Text based', 'ui:Terminal'],
]

const githubURL = 'https://github.com/cmdcolin/awesome-genome-visualization'

export default function App() {
  const mode = useAppStore(s => s.mode)
  const tag = useAppStore(s => s.tag)
  const sort = useAppStore(s => s.sort)

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) {
      document.getElementById(id)?.scrollIntoView({ block: 'start' })
    }
  }, [])

  const tools = sortTools(sort)
  const filteredTools = tag ? tools.filter(t => t.tags?.includes(tag)) : tools

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>awesome-genome-visualization</h1>
      <p>
        This is a companion website for the github repo{' '}
        <Link href={githubURL}>{githubURL}</Link>
      </p>

      <p>Feel free to submit PRs to add more tools</p>
      <FilterButtons />
      <SortButtons />
      <TagFilters tools={tools} />
      <ModeSelector />

      {mode === 'list' ? (
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
    <div className={styles.controls}>
      <label htmlFor="grid" className={styles.label}>
        Grid
      </label>
      <input
        id="grid"
        type="radio"
        checked={mode === 'grid'}
        onChange={() => {
          setMode('grid')
        }}
      />
      <label htmlFor="list" className={styles.label}>
        List
      </label>
      <input
        id="list"
        type="radio"
        checked={mode === 'list'}
        onChange={() => {
          setMode('list')
        }}
      />
    </div>
  )
}

function SortButtons() {
  const setSort = useAppStore(s => s.setSort)
  return (
    <p className={styles.note}>
      Sorts:
      {sortButtons.map(([label, sort]) => (
        <Button
          key={label}
          onClick={() => {
            setSort(sort)
          }}
        >
          {label}
        </Button>
      ))}
    </p>
  )
}

function FilterButtons() {
  const setTag = useAppStore(s => s.setTag)
  return (
    <p className={styles.note}>
      Filters:
      <Button
        onClick={() => {
          setTag()
        }}
      >
        Clear filters
      </Button>
      {filterButtons.map(([label, tag]) => (
        <Button
          key={tag}
          onClick={() => {
            setTag(tag)
          }}
        >
          {label}
        </Button>
      ))}
    </p>
  )
}
