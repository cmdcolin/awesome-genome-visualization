import { useEffect } from 'react'
import queryString from 'query-string'
import { tools as importedTools } from './TOOLS.json'
import { type Tool, useAppStore } from './store'

import FilterSelect from './FilterSelect'
import ToolCard from './ToolCard'
import ToolTable from './ToolTable'
import Link from './Link'
import Button from './Button'

export default function App() {
  const store = useAppStore()
  const { selected, mode, filters, sort } = store
  const { language, tag, platform, interactive } = filters

  useEffect(() => {
    const parameters = queryString.stringify({
      ...filters,
      ...sort,
      selected,
    })
    window.history.replaceState(
      null,
      '',
      parameters ? `?${parameters}` : window.location.pathname,
    )
  }, [filters, sort, selected])

  useEffect(() => {
    if (selected) {
      const target = document.querySelector(selected)
      if (target) {
        target.scrollIntoView({ block: 'start' })
      }
    }
  }, [selected])

  let tools = sort.latest ? [...importedTools].toReversed() : [...importedTools]

  // Helper function to sort by a numeric field with optional direction
  const sortByField = (
    items: Tool[],
    getValue: (item: Tool) => number | undefined,
    direction: number,
  ) => {
    const sorted = items.toSorted((a, b) => {
      const aVal = getValue(a) ?? Number.POSITIVE_INFINITY
      const bVal = getValue(b) ?? Number.POSITIVE_INFINITY
      return aVal - bVal
    })
    return direction === -1 ? sorted.toReversed() : sorted
  }

  if (sort.year !== undefined) {
    tools = sortByField(tools, t => t.pub?.year, sort.year)
  }

  if (sort.citations !== undefined) {
    tools = sortByField(tools, t => t.pub?.citations, sort.citations)
  }

  if (sort.stars !== undefined) {
    tools = sortByField(tools, t => t.github_stars, sort.stars)
  }

  const filteredTools = tools
    .filter(t => (language ? t.language?.includes(language) : true))
    .filter(t => (tag ? t.tags?.includes(tag) : true))
    .filter(t => (platform ? t.platform?.includes(platform) : true))
    .filter(t => (interactive ? t.interactive?.includes(interactive) : true))

  const githubURL = 'https://github.com/cmdcolin/awesome-genome-visualization'
  return (
    <div className="m-auto max-w-7xl flex flex-col gap-4">
      <h1 className="text-3xl">awesome-genome-visualization</h1>
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
        <div className="mt-6 flex flex-col space-y-8 overflow-hidden">
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
    <div className="flex gap-2">
      <label htmlFor="grid">Grid</label>
      <input
        id="grid"
        type="radio"
        className="radio radio-sm"
        checked={mode === 'grid'}
        onChange={() => {
          store.setMode('grid')
        }}
      />
      <label htmlFor="list">List</label>
      <input
        id="list"
        type="radio"
        className="radio radio-sm"
        checked={mode === 'list'}
        onChange={() => {
          store.setMode('list')
        }}
      />
    </div>
  )
}

const sortOptions = [
  { label: 'Recently added', sort: { latest: true } },
  { label: 'Least recently added', sort: { latest: false } },
  { label: 'Year (dec)', sort: { year: -1 } },
  { label: 'Year (asc)', sort: { year: 1 } },
  { label: 'Number citations (dec)', sort: { citations: -1 } },
  { label: 'Number citations (asc)', sort: { citations: 1 } },
  { label: 'Github stars (dec)', sort: { stars: -1 } },
  { label: 'Github stars (asc)', sort: { stars: 1 } },
] as const

function SortButtons() {
  const store = useAppStore()
  return (
    <p className="max-w-lg">
      Sorts:
      {sortOptions.map(({ label, sort }) => (
        <Button key={label} onClick={() => store.setSort(sort)}>
          {label}
        </Button>
      ))}
    </p>
  )
}

const filterPresets = [
  { label: 'Clear filters', filters: {} },
  { label: 'General-purpose genome browsers', filters: { tag: 'General' } },
  { label: 'Synteny/comparative browsers', filters: { tag: 'Comparative' } },
  { label: 'Dotplot viewer', filters: { tag: 'Dotplot' } },
  { label: 'MSA viewer', filters: { tag: 'MSA' } },
  { label: 'Graph genome', filters: { tag: 'Graph' } },
  { label: 'Text based', filters: { tag: 'Text based' } },
] as const

function FilterButtons() {
  const store = useAppStore()
  return (
    <p className="max-w-lg">
      Filters:
      {filterPresets.map(({ label, filters }) => (
        <Button key={label} onClick={() => store.setFilters(filters)}>
          {label}
        </Button>
      ))}
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
      <FilterSelect
        tools={tools}
        filterKey="tag"
        label="Filter on tag"
        getValues={tool => tool.tags}
      />
      <FilterSelect
        tools={tools}
        filterKey="language"
        label="Filter on language"
        getValues={tool => tool.language}
      />
      <FilterSelect
        tools={tools}
        filterKey="platform"
        label="Filter on platform"
        getValues={tool => tool.platform}
      />
      <FilterSelect
        tools={tools}
        filterKey="interactive"
        label="Filter on interactivity"
        getValues={tool => tool.interactive}
      />
    </div>
  )
}
