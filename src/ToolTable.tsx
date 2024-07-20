import { Tool } from './store'

export default function ToolTable({ tools }: { tools: Tool[] }) {
  const cell =
    'border border-solid dark:border-[#555] border-[#aaa] max-w-80 text-ellipsis overflow-hidden p-1'
  return (
    <table className="bg-white dark:bg-[#333] border-collapse border border-solid border-gray-500 text-xs">
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
              {pub ? (
                <>
                  {pub.doi ? (
                    <a
                      href={
                        pub.doi.startsWith('http')
                          ? pub.doi
                          : 'https://dx.doi.org/' + pub.doi
                      }
                    >
                      link {pub.year ? `(${pub.year})` : ''}{' '}
                      {pub.citations !== undefined
                        ? `(${pub.citations} citations)`
                        : ''}
                    </a>
                  ) : null}
                </>
              ) : null}
            </td>
            <td className={cell}>
              <a href={url} target="_blank">
                {url}
              </a>{' '}
              {github && github !== url ? <a href={github}>{github}</a> : null}
            </td>
            <td className={cell}>
              <a href={img} target="_blank">
                {img}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
