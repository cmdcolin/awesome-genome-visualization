import type { Tool } from './store'
import Link from './Link'
import ToolFigure from './ToolFigure'
import TagLinks from './TagLinks'
import Note from './Note'
import { slug as toSlug } from './slug'
import { doiUrl } from './doi'
import styles from './ToolCard.module.css'
import { contentFacets, metaFacetLabels, splitTag } from './facets'

function ellipses(f = '', n = 40) {
  return f.slice(0, n) + (f.length > n ? '...' : '')
}

function MetaRow({ label, tags }: { label: string; tags: string[] }) {
  return tags.length ? (
    <span className={styles.metaItem}>
      {label}: <TagLinks tags={tags} />
    </span>
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
  const slug = toSlug(name)
  const contentTags = tags.filter(t =>
    contentFacets.includes(splitTag(t).facet),
  )
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link id={slug} href={`#${slug}`}>
            {name}
          </Link>
          {tags
            .filter(t => splitTag(t).facet === 'status')
            .map(t => (
              <span className={styles.status} key={t}>
                {splitTag(t).value}
              </span>
            ))}
        </h3>
        {url !== undefined ? (
          <p className={styles.text}>
            <Link href={url}>{ellipses(url)}</Link>
          </p>
        ) : null}
        {alt_url !== undefined ? (
          <p className={styles.text}>
            Alt url <Link href={alt_url}>{ellipses(alt_url)}</Link>
          </p>
        ) : null}
        {pub ? (
          <p className={styles.metadata}>
            Publication:{' '}
            {pub.doi ? <Link href={doiUrl(pub.doi)}>(doi link)</Link> : null}{' '}
            {pub.year !== undefined ? ` (${pub.year})` : null}
            {pub.citations === undefined
              ? null
              : ` (# citations ${pub.citations})`}
          </p>
        ) : null}
        {contentTags.length ? (
          <p className={styles.metadata}>
            Tags: <TagLinks tags={contentTags} />
          </p>
        ) : null}
        <p className={styles.metadata}>
          {Object.entries(metaFacetLabels).map(([facet, label]) => (
            <MetaRow
              key={facet}
              label={label}
              tags={tags.filter(t => splitTag(t).facet === facet)}
            />
          ))}
        </p>
        {note !== undefined ? (
          <div>
            <Note>{'Note: ' + note}</Note>
          </div>
        ) : null}
        {twitter !== undefined ? (
          <p className={styles.metadata}>
            Twitter: <Link href={twitter}>{twitter}</Link>
          </p>
        ) : null}
        {github !== undefined ? (
          <p className={styles.metadata}>
            Github: <Link href={github}>{github}</Link>
            {github_stars === undefined
              ? null
              : ` (${github_stars.toLocaleString()} stars)`}
          </p>
        ) : null}
      </div>
      <ToolFigure img={img} name={name} width={width} height={height} />
    </div>
  )
}
