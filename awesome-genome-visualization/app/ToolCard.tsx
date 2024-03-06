import { useState } from 'react'
import slugify from 'slugify'
import { Tool } from '@/lib/api'

interface Filter {
  interactive?: string
  tag?: string
  language?: string
  platform?: string
}
export default function ToolCard({
  setSelected,
  tool: {
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
  },
  filters,
  setFilters,
}: {
  tool: Tool
  filters: Filter
  setSelected: (arg: { selected: string }) => void
  setFilters: (arg: Filter) => void
}) {
  const [expanded, setExpanded] = useState(false)
  const slug = slugify(name, { remove: /[*+~.()'"!:@]/g })
  return (
    <div className="card">
      <div>
        <h3>
          <a
            id={slug}
            href="#"
            style={{ color: 'black', cursor: 'pointer' }}
            onClick={event => {
              setSelected({ selected: '#' + slug })
              event.preventDefault()
            }}
          >
            {name}
          </a>
        </h3>
        <p className="link">
          <a href={url}>{url}</a>
        </p>
        {alt_url ? (
          <p className="link">
            Alt url <a href={alt_url}>{alt_url}</a>
          </p>
        ) : null}
        {interactive ? (
          <p className="interactive">Interactive: {interactive?.join(',')}</p>
        ) : null}
        {pub ? (
          <p>
            Publication: {pub.url ? <a href={pub.url}>(direct link)</a> : null}{' '}
            {pub.doi ? (
              <a
                href={
                  pub.doi.startsWith('http')
                    ? pub.doi
                    : 'https://dx.doi.org/' + pub.doi
                }
              >
                (doi link)
              </a>
            ) : null}{' '}
            {pub.year ? ` (${pub.year})` : null}
            {pub.citations !== undefined
              ? ` (# citations ${pub.citations})`
              : null}
          </p>
        ) : null}
        {language ? (
          <p>
            Language:{' '}
            {language.map((language, index) => [
              index > 0 && ', ',
              <a
                key={language + '-' + index}
                onClick={event => {
                  setFilters({ ...filters, language })
                  event.preventDefault()
                }}
              >
                {language}
              </a>,
            ])}
          </p>
        ) : null}
        {tags ? (
          <p>
            Tags:{' '}
            {tags.map((tag, index) => [
              index > 0 && ', ',
              <a
                key={tag + '-' + index}
                onClick={event => {
                  setFilters({ ...filters, tag })
                  event.preventDefault()
                }}
              >
                {tag}
              </a>,
            ])}
          </p>
        ) : null}
        {note ? <p>Note: {note}</p> : null}
        {twitter ? (
          <p className="link">
            Twitter: <a href={twitter}>{twitter}</a>
          </p>
        ) : null}
        {github ? (
          <p className="link">
            Github: <a href={github}>{github}</a>
          </p>
        ) : null}

        {github_stars ? <p>Github Stargazers: {github_stars}</p> : null}
        {platform ? <p>Platform: {platform.join(', ')}</p> : null}
      </div>
      <figure role="presentation" onClick={() => setExpanded(state => !state)}>
        {img ? (
          <img
            alt={`screenshot of ${name}`}
            loading="lazy"
            className={expanded ? 'expanded' : ''}
            width={width}
            height={height}
            src={img}
          />
        ) : (
          <p className="no-screenshot">No screenshot</p>
        )}
        {expanded ? (
          <div className="modal-backdrop">
            <img alt={`screenshot of ${name}`} src={img} />
          </div>
        ) : null}
      </figure>
    </div>
  )
}
