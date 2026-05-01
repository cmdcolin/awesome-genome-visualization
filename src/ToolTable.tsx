import Link from './Link'
import type { Tool } from './store'
import styles from './ToolTable.module.css'

export default function ToolTable({ tools }: { tools: Tool[] }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.cell}>Name</th>
          <th className={styles.cell}>Tags</th>
          <th className={styles.cell}>Pub</th>
          <th className={styles.cell}>URL</th>
          <th className={styles.cell}>IMG</th>
        </tr>
      </thead>
      <tbody>
        {tools.map(({ name, github, pub, tags, img, url }) => (
          <tr key={name}>
            <td className={styles.cell}>{name}</td>
            <td className={styles.cell}>{tags?.join(', ')}</td>
            <td className={styles.cell}>
              {pub ? (
                <>
                  {pub.doi ? (
                    <Link
                      href={
                        pub.doi.startsWith('http')
                          ? pub.doi
                          : `https://dx.doi.org/${pub.doi}`
                      }
                    >
                      link {pub.year ? `(${pub.year})` : ''}{' '}
                      {pub.citations === undefined
                        ? ''
                        : `(${pub.citations} citations)`}
                    </Link>
                  ) : null}
                </>
              ) : null}
            </td>
            <td className={styles.cell}>
              {url ? (
                <Link href={url} target="_blank" rel="noreferrer">
                  {url}
                </Link>
              ) : null}{' '}
              {github && github !== url ? (
                <Link href={github}>{github}</Link>
              ) : null}
            </td>
            <td className={styles.cell}>
              {img ? (
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
