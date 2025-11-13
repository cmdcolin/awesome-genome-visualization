import { useState } from 'react'
import slugify from 'slugify'
import { type Tool, useAppStore, type FilterState } from './store'
import Link from './Link'
import ToolFigure from './ToolFigure'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const MAX_URL_DISPLAY_LENGTH = 40

function ellipses(f = '', n = MAX_URL_DISPLAY_LENGTH) {
  return f.slice(0, n) + (f.length > n ? '...' : '')
}

function formatDoiUrl(doi: string) {
  return doi.startsWith('http') ? doi : `https://dx.doi.org/${doi}`
}

interface Pub {
  url?: string
  doi: string
  year?: number
  citations?: number
}

function ToolCardPublication({ pub }: { pub: Pub }) {
  return (
    <p>
      Publication:{' '}
      {pub.doi ? <Link href={formatDoiUrl(pub.doi)}>(doi link)</Link> : null}{' '}
      {pub.year ? ` (${pub.year})` : null}
      {pub.citations === undefined ? null : ` (# citations ${pub.citations})`}
    </p>
  )
}

function ToolCardLinks({
  url,
  alt_url,
  twitter,
  github,
}: {
  url?: string
  alt_url?: string
  twitter?: string
  github?: string
}) {
  return (
    <>
      {url ? (
        <p>
          <Link href={url}>{ellipses(url)}</Link>
        </p>
      ) : null}
      {alt_url ? (
        <p>
          Alt url <Link href={alt_url}>{ellipses(alt_url)}</Link>
        </p>
      ) : null}
      {twitter ? (
        <>
          Twitter: <Link href={twitter}>{twitter}</Link>
        </>
      ) : null}
      {github ? (
        <>
          Github: <Link href={github}>{github}</Link>
        </>
      ) : null}
    </>
  )
}

function FilterableList({
  label,
  items,
  filterKey,
}: {
  label: string
  items: string[]
  filterKey: keyof FilterState
}) {
  const store = useAppStore()
  const { filters } = store

  return (
    <p>
      {label}:{' '}
      {items.map((item, index) => [
        index > 0 && ', ',
        <Link
          href="#"
          key={`${item}-${index}`}
          onClick={event => {
            store.setFilters({ ...filters, [filterKey]: item })
            event.preventDefault()
          }}
        >
          {item}
        </Link>,
      ])}
    </p>
  )
}

export default function ToolCard({ tool }: { tool: Tool }) {
  const {
    name,
    url,
    language,
    tags,
    img,
    width,
    height,
    github,
    twitter,
    platform,
    github_stars,
    pub,
    note,
    alt_url,
    interactive,
  } = tool
  const store = useAppStore()
  const [expanded, setExpanded] = useState(false)
  const slug = slugify(name, { remove: /[!"'()*+.:@~]/g })

  return (
    <div className="flex flex-col lg:flex-row justify-between border border-[#ccc] dark:border-[#666] border-solid p-4 shadow-xs shadow-[#ccc] dark:shadow-[#333]">
      <div>
        <h3 className="m-0 text-xl mb-4">
          <Link
            id={slug}
            href="#"
            onClick={event => {
              store.setSelected(`#${slug}`)
              event.preventDefault()
            }}
          >
            {name}
          </Link>
        </h3>

        <ToolCardLinks url={url} alt_url={alt_url} twitter={twitter} github={github} />

        {interactive ? (
          <p className="interactive">Interactive: {interactive.join(',')}</p>
        ) : null}

        {pub ? <ToolCardPublication pub={pub} /> : null}

        {language ? <FilterableList label="Language" items={language} filterKey="language" /> : null}

        {tags ? <FilterableList label="Tags" items={tags} filterKey="tag" /> : null}

        {note ? (
          <div>
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children, ...props }) => (
                  <a href={href} className="link" {...props}>
                    {children}
                  </a>
                ),
              }}
            >
              {'Note: ' + note}
            </Markdown>
          </div>
        ) : null}

        {github_stars ? <p>Github Stargazers: {github_stars}</p> : null}
        {platform ? <p>Platform: {platform.join(', ')}</p> : null}
      </div>
      <ToolFigure
        img={img}
        name={name}
        width={width}
        height={height}
        expanded={expanded}
        setExpanded={setExpanded}
      />
    </div>
  )
}
