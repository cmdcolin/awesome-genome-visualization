import { useState } from 'react'
import slugify from 'slugify'
import { type Tool, useAppStore } from './store'
import ImageDialog from './ImageDialog'
import Link from './Link'

function ellipses(f = '', n = 40) {
  return f.slice(0, n) + (f.length > n ? '...' : '')
}

export default function ToolCard({
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
}: {
  tool: Tool
}) {
  const store = useAppStore()
  const { filters } = store
  const [expanded, setExpanded] = useState(false)
  const slug = slugify(name, { remove: /[!"'()*+.:@~]/g })
  return (
    <div className="bg-white dark:bg-[#333] flex flex-col lg:flex-row justify-between border border-[#ccc] dark:border-[#666] border-solid p-4 shadow-xs shadow-[#ccc] dark:shadow-[#333]">
      <div>
        <h3 className="m-0 text-xl">
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
        {interactive ? (
          <p className="interactive">Interactive: {interactive.join(',')}</p>
        ) : null}
        {pub ? (
          <p>
            Publication:{' '}
            {pub.doi ? (
              <Link
                href={
                  pub.doi.startsWith('http')
                    ? pub.doi
                    : `https://dx.doi.org/${pub.doi}`
                }
              >
                (doi link)
              </Link>
            ) : null}{' '}
            {pub.year ? ` (${pub.year})` : null}
            {pub.citations === undefined
              ? null
              : ` (# citations ${pub.citations})`}
          </p>
        ) : null}
        {language ? (
          <p>
            Language:{' '}
            {language.map((language, index) => [
              index > 0 && ', ',
              <Link
                href="#"
                key={`${language}-${index}`}
                onClick={event => {
                  store.setFilters({ ...filters, language })
                  event.preventDefault()
                }}
              >
                {language}
              </Link>,
            ])}
          </p>
        ) : null}
        {tags ? (
          <p>
            Tags:{' '}
            {tags.map((tag, index) => [
              index > 0 && ', ',
              <Link
                href="#"
                key={`${tag}-${index}`}
                onClick={event => {
                  store.setFilters({ ...filters, tag })
                  event.preventDefault()
                }}
              >
                {tag}
              </Link>,
            ])}
          </p>
        ) : null}
        {note ? <p>Note: {note}</p> : null}
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

        {github_stars ? <p>Github Stargazers: {github_stars}</p> : null}
        {platform ? <p>Platform: {platform.join(', ')}</p> : null}
      </div>
      <figure
        onClick={() => {
          setExpanded(state => !state)
        }}
      >
        {img ? (
          <img
            alt={`screenshot of ${name}`}
            loading="lazy"
            className="max-h-sm h-auto max-w-sm"
            width={width}
            height={height}
            src={img}
          />
        ) : (
          <p>No screenshot</p>
        )}
        {expanded && img ? <ImageDialog open img={img} /> : null}
      </figure>
    </div>
  )
}
