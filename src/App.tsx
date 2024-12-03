import { useEffect } from 'react'
import queryString from 'query-string'
import { tools as importedTools } from './TOOLS.json'
import { type Tool, useAppStore } from './store'

// locals
import InteractiveFilters from './InteractiveFilters'
import PlatformFilters from './PlatformFilters'
import TagFilters from './TagFilters'
import LanguageFilters from './LanguageFilters'
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
    if (parameters) {
      window.history.replaceState(null, '', `?${parameters}`)
    }
  }, [filters, sort, selected])

  useEffect(() => {
    if (selected) {
      const target = document.querySelector(selected)
      if (target) {
        target.scrollIntoView({ block: 'start' })
      }
    }
  }, [selected])

  let tools = sort.latest ? [...importedTools].reverse() : [...importedTools]

  const y = sort.year
  if (y !== undefined) {
    tools = tools.sort(
      (a, b) =>
        +(a.pub?.year ?? Number.POSITIVE_INFINITY * y) -
        +(b.pub?.year ?? Number.POSITIVE_INFINITY * y),
    )
    if (sort.year === -1) {
      tools = tools.reverse()
    }
  }

  const c = sort.citations
  if (c !== undefined) {
    tools = tools.sort(
      (a, b) =>
        +(a.pub?.citations ?? Number.POSITIVE_INFINITY * c) -
        +(b.pub?.citations ?? Number.POSITIVE_INFINITY * c),
    )
    if (sort.citations === -1) {
      tools = tools.reverse()
    }
  }

  const s = sort.stars
  if (s !== undefined) {
    tools = tools.sort(
      (a, b) =>
        +(a.github_stars ?? Number.POSITIVE_INFINITY * s) -
        +(b.github_stars ?? Number.POSITIVE_INFINITY * s),
    )
    if (sort.stars === -1) {
      tools = tools.reverse()
    }
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
      <p>
        Also check out our twitter account{' '}
        <Link href="https://twitter.com/awesomegenomev1">@awesomegenomev1</Link>
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

function SortButtons() {
  const store = useAppStore()
  return (
    <p className="max-w-lg">
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
    <p className="max-w-lg">
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
          store.setFilters({ tag: 'General' })
        }}
      >
        General-purpose genome browsers
      </Button>
      <Button
        onClick={() => {
          store.setFilters({ tag: 'Comparative' })
        }}
      >
        Synteny/comparative browsers
      </Button>
      <Button
        onClick={() => {
          store.setFilters({ tag: 'Dotplot' })
        }}
      >
        Dotplot viewer
      </Button>
      <Button
        onClick={() => {
          store.setFilters({ tag: 'MSA' })
        }}
      >
        MSA viewer
      </Button>
      <Button
        onClick={() => {
          store.setFilters({ tag: 'Graph' })
        }}
      >
        Graph genome
      </Button>
      <Button
        onClick={() => {
          store.setFilters({ tag: 'Text based' })
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
      <LanguageFilters tools={tools} />
      <PlatformFilters tools={tools} />
      <InteractiveFilters tools={tools} />
    </div>
  )
}
