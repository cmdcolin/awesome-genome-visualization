import { useState } from 'react'
import { type Tool, useAppStore } from './store'
import Link from './Link'
import ToolFigure from './ToolFigure'
import Note from './Note'
import { slug as toSlug } from './slug'
import styles from './ToolCard.module.css'
import { contentFacets, metaFacetLabels, splitTag } from './facets'

function ellipses(f = '', n = 40) {
  return f.slice(0, n) + (f.length > n ? '...' : '')
}

function TagRow({ label, tags }: { label: string; tags: string[] }) {
  const store = useAppStore()
  return tags.length ? (
    <p className={styles.metadata}>
      {label}:{' '}
      {tags.map((tag, index) => [
        index > 0 && ', ',
        <Link
          href="#"
          key={tag}
          onClick={event => {
            store.setFilters({ ...store.filters, tag })
            event.preventDefault()
          }}
        >
          {splitTag(tag).value}
        </Link>,
      ])}
    </p>
  ) : null
}

export default function ToolCard({ tool }: { tool: Tool }) {
  const {
    name,
    url,
    tags = [],
    img,
    width,
    height,
    github,
    twitter,
    github_stars,
    pub,
    note,
    alt_url,
  } = tool
  const store = useAppStore()
  const [expanded, setExpanded] = useState(false)
  const slug = toSlug(name)
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>
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
          <p className={styles.text}>
            <Link href={url}>{ellipses(url)}</Link>
          </p>
        ) : null}
        {alt_url ? (
          <p className={styles.text}>
            Alt url <Link href={alt_url}>{ellipses(alt_url)}</Link>
          </p>
        ) : null}
        {pub ? (
          <p className={styles.metadata}>
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
        <TagRow
          label="Tags"
          tags={tags.filter(t => contentFacets.includes(splitTag(t).facet))}
        />
        {Object.entries(metaFacetLabels).map(([facet, label]) => (
          <TagRow
            key={facet}
            label={label}
            tags={tags.filter(t => splitTag(t).facet === facet)}
          />
        ))}
        {note ? (
          <div>
            <Note>{'Note: ' + note}</Note>
          </div>
        ) : null}
        {twitter ? (
          <p className={styles.metadata}>
            Twitter: <Link href={twitter}>{twitter}</Link>
          </p>
        ) : null}
        {github ? (
          <p className={styles.metadata}>
            Github: <Link href={github}>{github}</Link>
          </p>
        ) : null}

        {github_stars ? (
          <p className={styles.metadata}>Github Stargazers: {github_stars}</p>
        ) : null}
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
