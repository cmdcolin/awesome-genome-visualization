'use client'
import queryString from 'querystring'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

// locals
import ToolCards from './ToolCards'
import InteractiveFilters from './InteractiveFilters'
import PlatformFilters from './PlatformFilters'
import TagFilters from './TagFilters'
import LanguageFilters from './LanguageFilters'
import { Tool } from '@/lib/api'

interface Filter {
  interactive?: string
  tag?: string
  language?: string
  platform?: string
}

const coerseN = (arg: unknown) => (arg ? Number(arg) : undefined)
const coerseS = (arg: unknown) => (arg ? String(arg) : undefined)
const coerseB = (arg: string) =>
  arg ? (JSON.parse(arg) as boolean) : undefined

export default function MainPage({ tools }: { tools: Tool[] }) {
  const [filters, setFilters] = useState<Filter>({})
  const [alreadyScrolledTo, setAlreadyScrolledTo] = useState(false)
  const [sort, setSort] = useState<{
    latest?: boolean
    year?: number
    stars?: number
    citations?: number
  }>({})
  const [selected, setSelected] = useState<{ selected?: string }>({})
  const { language, tag, platform, interactive } = filters

  const searchParams = useSearchParams()
  const selectedURL = searchParams.get('selected')
  const languageURL = searchParams.get('language')
  const tagURL = searchParams.get('tag')
  const platformURL = searchParams.get('platform')
  const latestURL = searchParams.get('latest')
  const citationsURL = searchParams.get('citations')
  const yearURL = searchParams.get('year')
  const starsURL = searchParams.get('stars')

  useEffect(() => {
    setFilters({
      language: coerseS(languageURL),
      tag: coerseS(tagURL),
      platform: coerseS(platformURL),
    })

    if (citationsURL || yearURL || starsURL) {
      setSort({
        citations: coerseN(citationsURL),
        year: coerseN(yearURL),
        stars: coerseN(starsURL),
      })
    } else {
      setSort({ latest: coerseB(latestURL || 'true') })
    }
    if (selectedURL) {
      setSelected({ selected: `${selectedURL}` })
    }
  }, [
    citationsURL,
    languageURL,
    latestURL,
    platformURL,
    selectedURL,
    starsURL,
    tagURL,
    yearURL,
  ])

  useEffect(() => {
    const params = queryString.stringify({ ...filters, ...sort, ...selected })
    if (params) {
      window.history.pushState(null, '', '?' + params)
    }

    if (selected.selected && !alreadyScrolledTo) {
      const target = document.querySelector(selected.selected)
      if (target) {
        target.scrollIntoView({ block: 'start' })
      }
      setAlreadyScrolledTo(true)
    }
  }, [filters, sort, selected, alreadyScrolledTo])

  tools = sort.latest ? tools.slice().reverse() : tools.slice()

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
    <main className="page">
      <h1>awesome-genome-visualization</h1>
      <p>
        This is a companion website for the github repo{' '}
        <a href={githubURL}>{githubURL}</a>
      </p>
      <p>
        Also check out our twitter account{' '}
        <a href="https://twitter.com/awesomegenomev1">@awesomegenomev1</a>
      </p>
      <div style={{ maxWidth: 500 }}>
        <p>Feel free to submit PRs to add more tools</p>
      </div>

      <p className="example-buttons">
        Filters:
        <button onClick={() => setFilters({})}>Clear filters</button>
        <button onClick={() => setFilters({ tag: 'General' })}>
          General-purpose genome browsers
        </button>
        <button onClick={() => setFilters({ tag: 'Comparative' })}>
          Synteny/comparative browsers
        </button>
        <button onClick={() => setFilters({ tag: 'Dotplot' })}>
          Dotplot viewer
        </button>
        <button onClick={() => setFilters({ tag: 'MSA' })}>MSA viewer</button>
        <button onClick={() => setFilters({ tag: 'Graph' })}>
          Graph genome
        </button>
        <button onClick={() => setFilters({ tag: 'Text based' })}>
          Text based
        </button>
      </p>
      <p className="example-buttons">
        <br />
        <br />
        <br />
        <b>
          Before clicking these sort routines: Try to avoid being unfairly
          biased by citation numbers and github stars!! Best effort was made to
          find the right DOI and github repo
        </b>
        <br />
        <br />
        Sorts:
        <button onClick={() => setSort({ latest: true })}>
          Recently added
        </button>
        <button onClick={() => setSort({ latest: false })}>
          Least recently added
        </button>
        <button onClick={() => setSort({ year: -1 })}>Year (dec)</button>
        <button onClick={() => setSort({ year: 1 })}>Year (asc)</button>
        <button onClick={() => setSort({ citations: -1 })}>
          Number citations (dec)
        </button>
        <button onClick={() => setSort({ citations: 1 })}>
          Number citations (asc)
        </button>
        <button onClick={() => setSort({ stars: -1 })}>
          Github stars (dec)
        </button>
        <button onClick={() => setSort({ stars: 1 })}>
          Github stars (asc)
        </button>
      </p>

      <p className="example-buttons">
        Selection:
        <button onClick={() => setSelected({})}>Clear selection</button>
      </p>

      <div id="filters">
        <TagFilters tools={tools} filters={filters} setFilters={setFilters} />
        <LanguageFilters
          tools={tools}
          filters={filters}
          setFilters={setFilters}
        />
        <PlatformFilters
          tools={tools}
          filters={filters}
          setFilters={setFilters}
        />
        <InteractiveFilters
          tools={tools}
          filters={filters}
          setFilters={setFilters}
        />
        <span>
          Note: tagging interactivity is a work in progress (as are other tags,
          feel free to contribute on github)
        </span>
      </div>

      <ToolCards
        filters={filters}
        tools={filteredTools}
        setSelected={setSelected}
        setFilters={setFilters}
      />
      <p>
        Note: if you would like your tool removed or screenshot removed (for
        copyright purposes for example) let me know
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        onClick={() => window.scrollTo(0, 0)}
        className="top-link"
        viewBox="0 0 12 6"
      >
        <path d="M12 6H0l6-6z" />
      </svg>
    </main>
  )
}
