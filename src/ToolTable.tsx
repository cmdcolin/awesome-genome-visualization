import Link from './Link'
import type { Tool } from './store'

function formatDoiUrl(doi: string) {
  return doi.startsWith('http') ? doi : `https://dx.doi.org/${doi}`
}

export default function ToolTable({ tools }: { tools: Tool[] }) {
  const cell =
    'border border-solid dark:border-[#555] border-[#aaa] max-w-80 text-ellipsis overflow-hidden p-1'
  return (
    <table className="border-collapse text-xs">
      <thead>
        <tr>
          <th className={cell}>Name</th>
          <th className={cell}>Tags</th>
          <th className={cell}>Pub</th>
          <th className={cell}>URL</th>
          <th className={cell}>IMG</th>
        </tr>
      </thead>
      <tbody>
        {tools.map(({ name, github, pub, tags, img, url }) => (
          <tr key={name}>
            <td className={cell}>{name}</td>
            <td className={cell}>{tags?.join(', ')}</td>
            <td className={cell}>
              {pub?.doi ? (
                <Link href={formatDoiUrl(pub.doi)}>
                  link {pub.year ? `(${pub.year})` : ''}{' '}
                  {pub.citations === undefined
                    ? ''
                    : `(${pub.citations} citations)`}
                </Link>
              ) : null}
            </td>
            <td className={cell}>
              {url ? (
                <Link href={url} target="_blank" rel="noreferrer">
                  {url}
                </Link>
              ) : null}{' '}
              {github && github !== url ? (
                <Link href={github}>{github}</Link>
              ) : null}
            </td>
            <td className={cell}>
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
