import Link from './Link'
import TagLinks from './TagLinks'
import { doiUrl } from './doi'
import { type SortBy, type Tool, useAppStore } from './store'
import styles from './ToolTable.module.css'

function SortHeader({ by, children }: { by: SortBy; children: string }) {
  const sort = useAppStore(s => s.sort)
  const setSort = useAppStore(s => s.setSort)
  const active = sort.by === by
  return (
    <th
      className={styles.cell}
      aria-sort={
        active ? (sort.dir === 1 ? 'ascending' : 'descending') : undefined
      }
    >
      <button
        type="button"
        className={styles.sortButton}
        onClick={() => {
          setSort({ by, dir: active && sort.dir === 1 ? -1 : 1 })
        }}
      >
        {children}
        {active ? (sort.dir === 1 ? ' ▲' : ' ▼') : ''}
      </button>
    </th>
  )
}

export default function ToolTable({ tools }: { tools: Tool[] }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <SortHeader by="name">Name</SortHeader>
          <th className={styles.cell}>Tags</th>
          <SortHeader by="year">Pub</SortHeader>
          <SortHeader by="stars">Stars</SortHeader>
          <th className={styles.cell}>URL</th>
          <th className={styles.cell}>IMG</th>
        </tr>
      </thead>
      <tbody>
        {tools.map(({ name, github, github_stars, pub, tags, img, url }) => (
          <tr key={name}>
            <td className={styles.cell}>{name}</td>
            <td className={styles.cell}>
              <TagLinks tags={tags ?? []} />
            </td>
            <td className={styles.cell}>
              {pub?.doi !== undefined && pub.doi !== '' ? (
                <Link href={doiUrl(pub.doi)}>
                  link {pub.year !== undefined ? `(${pub.year})` : ''}{' '}
                  {pub.citations === undefined
                    ? ''
                    : `(${pub.citations} citations)`}
                </Link>
              ) : null}
            </td>
            <td className={styles.cell}>{github_stars}</td>
            <td className={styles.cell}>
              {url !== undefined ? (
                <Link href={url} target="_blank" rel="noreferrer">
                  {url}
                </Link>
              ) : null}{' '}
              {github !== undefined && github !== url ? (
                <Link href={github}>{github}</Link>
              ) : null}
            </td>
            <td className={styles.cell}>
              {img !== undefined ? (
                <Link href={img} target="_blank" rel="noreferrer">
                  {img}
                </Link>
              ) : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
