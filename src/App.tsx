import { useEffect } from 'react'
import { tools as importedTools } from './TOOLS.json'
import { type Tool, useAppStore } from './store'
import styles from './App.module.css'

import TagFilters from './TagFilters'
import ToolCard from './ToolCard'
import ToolTable from './ToolTable'
import Link from './Link'
import Button from './Button'

export default function App() {
  const store = useAppStore()
  const { selected, mode, filters, sort } = store
  const { tag } = filters

  useEffect(() => {
    const parameters = new URLSearchParams()
    for (const [key, value] of Object.entries({
      ...filters,
      ...sort,
      selected,
    })) {
      if (value !== undefined) {
        parameters.set(key, String(value))
      }
    }
    if (parameters.size) {
      window.history.replaceState(null, '', `?${parameters.toString()}`)
    }
  }, [filters, sort, selected])

  useEffect(() => {
    if (selected) {
      const target = document.getElementById(selected.replace(/^#/, ''))
      if (target) {
        target.scrollIntoView({ block: 'start' })
      }
    }
  }, [selected])

  let tools = sort.latest ? [...importedTools].toReversed() : [...importedTools]

  const y = sort.year
  if (y !== undefined) {
    tools = tools.toSorted(
      (a, b) =>
        (a.pub?.year ?? Number.POSITIVE_INFINITY * y) -
        (b.pub?.year ?? Number.POSITIVE_INFINITY * y),
    )
    if (sort.year === -1) {
      tools = tools.toReversed()
    }
  }

  const c = sort.citations
  if (c !== undefined) {
    tools = tools.toSorted(
      (a, b) =>
        (a.pub?.citations ?? Number.POSITIVE_INFINITY * c) -
        (b.pub?.citations ?? Number.POSITIVE_INFINITY * c),
    )
    if (sort.citations === -1) {
      tools = tools.toReversed()
    }
  }

  const s = sort.stars
  if (s !== undefined) {
    tools = tools.toSorted(
      (a, b) =>
        (a.github_stars ?? Number.POSITIVE_INFINITY * s) -
        (b.github_stars ?? Number.POSITIVE_INFINITY * s),
    )
    if (sort.stars === -1) {
      tools = tools.toReversed()
    }
  }

  const filteredTools = tools.filter(t => (tag ? t.tags.includes(tag) : true))

  const githubURL = 'https://github.com/cmdcolin/awesome-genome-visualization'
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
      <ClearSelection />
      <FilterSelectors tools={tools} />
      <GridSelector />

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

function GridSelector() {
  const store = useAppStore()
  const { mode } = store
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
          store.setMode('grid')
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
          store.setMode('list')
        }}
      />
    </div>
  )
}

function SortButtons() {
  const store = useAppStore()
  return (
    <p className={styles.note}>
      Sorts:
      <Button
        onClick={() => {
          store.setSort({ latest: true })
        }}
      >
        Recently added
      </Button>
      <Button
        onClick={() => {
          store.setSort({ latest: false })
        }}
      >
        Least recently added
      </Button>
      <Button
        onClick={() => {
          store.setSort({ year: -1 })
        }}
      >
        Year (dec)
      </Button>
      <Button
        onClick={() => {
          store.setSort({ year: 1 })
        }}
      >
        Year (asc)
      </Button>
      <Button
        onClick={() => {
          store.setSort({ citations: -1 })
        }}
      >
        Number citations (dec)
      </Button>
      <Button
        onClick={() => {
          store.setSort({ citations: 1 })
        }}
      >
        Number citations (asc)
      </Button>
      <Button
        onClick={() => {
          store.setSort({ stars: -1 })
        }}
      >
        Github stars (dec)
      </Button>
      <Button
        onClick={() => {
          store.setSort({ stars: 1 })
        }}
      >
        Github stars (asc)
      </Button>
    </p>
  )
}

function FilterButtons() {
  const store = useAppStore()
  return (
    <p className={styles.note}>
      Filters:
      <Button
        onClick={() => {
          store.setFilters({})
        }}
      >
        Clear filters
      </Button>
      <Button
        onClick={() => {
          store.setFilters({ tag: 'kind:Genome browser' })
        }}
      >
        General-purpose genome browsers
      </Button>
      <Button
        onClick={() => {
          store.setFilters({ tag: 'field:Comparative genomics' })
        }}
      >
        Synteny/comparative browsers
      </Button>
      <Button
        onClick={() => {
          store.setFilters({ tag: 'view:Dotplot' })
        }}
      >
        Dotplot viewer
      </Button>
      <Button
        onClick={() => {
          store.setFilters({ tag: 'data:MSA' })
        }}
      >
        MSA viewer
      </Button>
      <Button
        onClick={() => {
          store.setFilters({ tag: 'data:Genome graph' })
        }}
      >
        Graph genome
      </Button>
      <Button
        onClick={() => {
          store.setFilters({ tag: 'ui:Terminal' })
        }}
      >
        Text based
      </Button>
    </p>
  )
}

function ClearSelection() {
  const store = useAppStore()
  return (
    <p>
      Selection:
      <Button
        onClick={() => {
          store.setSelected()
        }}
      >
        Clear selection
      </Button>
    </p>
  )
}

function FilterSelectors({ tools }: { tools: Tool[] }) {
  return (
    <div>
      <TagFilters tools={tools} />
    </div>
  )
}
