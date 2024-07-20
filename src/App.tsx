import { useEffect } from 'react'
import queryString from 'query-string'
import { tools as importedTools } from './TOOLS.json'
import { useAppStore } from './store'

// locals
import InteractiveFilters from './InteractiveFilters'
import PlatformFilters from './PlatformFilters'
import TagFilters from './TagFilters'
import LanguageFilters from './LanguageFilters'
import ToolCard from './ToolCard'

export default function App() {
  const store = useAppStore()
  const { selected, filters, sort } = store
  const { language, tag, platform, interactive } = filters

  useEffect(() => {
    const parameters = queryString.stringify({
      ...filters,
      ...sort,
      selected,
    })
    if (parameters) {
      window.history.replaceState(null, '', '?' + parameters)
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
      (a, b) => +(a.pub?.year || Infinity * y) - +(b.pub?.year || Infinity * y),
    )
    if (sort.year === -1) {
      tools = tools.reverse()
    }
  }

  const c = sort.citations
  if (c !== undefined) {
    tools = tools.sort(
      (a, b) =>
        +(a.pub?.citations || Infinity * c) -
        +(b.pub?.citations || Infinity * c),
    )
    if (sort.citations === -1) {
      tools = tools.reverse()
    }
  }

  const s = sort.stars
  if (s !== undefined) {
    tools = tools.sort(
      (a, b) =>
        +(a.github_stars || Infinity * s) - +(b.github_stars || Infinity * s),
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
    <main className="m-auto max-w-7xl">
      <h1>awesome-genome-visualization</h1>
      <p>
        This is a companion website for the github repo{' '}
        <a href={githubURL}>{githubURL}</a>
      </p>
      <p>
        Also check out our twitter account{' '}
        <a href="https://twitter.com/awesomegenomev1">@awesomegenomev1</a>
      </p>
      <p>Feel free to submit PRs to add more tools</p>

      <p className="max-w-lg">
        Filters:
        <button onClick={() => store.setFilters({})}>Clear filters</button>
        <button onClick={() => store.setFilters({ tag: 'General' })}>
          General-purpose genome browsers
        </button>
        <button onClick={() => store.setFilters({ tag: 'Comparative' })}>
          Synteny/comparative browsers
        </button>
        <button onClick={() => store.setFilters({ tag: 'Dotplot' })}>
          Dotplot viewer
        </button>
        <button onClick={() => store.setFilters({ tag: 'MSA' })}>
          MSA viewer
        </button>
        <button onClick={() => store.setFilters({ tag: 'Graph' })}>
          Graph genome
        </button>
        <button onClick={() => store.setFilters({ tag: 'Text based' })}>
          Text based
        </button>
      </p>
      <p className="max-w-lg">
        Sorts:
        <button onClick={() => store.setSort({ latest: true })}>
          Recently added
        </button>
        <button onClick={() => store.setSort({ latest: false })}>
          Least recently added
        </button>
        <button onClick={() => store.setSort({ year: -1 })}>Year (dec)</button>
        <button onClick={() => store.setSort({ year: 1 })}>Year (asc)</button>
        <button onClick={() => store.setSort({ citations: -1 })}>
          Number citations (dec)
        </button>
        <button onClick={() => store.setSort({ citations: 1 })}>
          Number citations (asc)
        </button>
        <button onClick={() => store.setSort({ stars: -1 })}>
          Github stars (dec)
        </button>
        <button onClick={() => store.setSort({ stars: 1 })}>
          Github stars (asc)
        </button>
      </p>

      <p>
        Selection:
        <button onClick={() => store.setSelected()}>Clear selection</button>
      </p>

      <div>
        <TagFilters tools={tools} />
        <LanguageFilters tools={tools} />
        <PlatformFilters tools={tools} />
        <InteractiveFilters tools={tools} />
      </div>

      <div className="mt-6 flex flex-col space-y-8">
        {filteredTools.map(tool => (
          <ToolCard tool={tool} key={tool.name} />
        ))}
      </div>
      <p>
        Note: if you would like your tool removed or screenshot removed (for
        copyright purposes for example) let me know
      </p>
    </main>
  )
}
