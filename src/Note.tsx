import Link from './Link'

const tokens = /`([^`]+)`|https?:\/\/[^\s<]+/g

function trimUrl(url: string) {
  let end = url.length
  while (end > 0) {
    const last = url[end - 1]
    const unbalanced =
      last === ')' &&
      url.slice(0, end).split(')').length > url.slice(0, end).split('(').length
    if (/[.,;:!?'"]/.test(last) || unbalanced) {
      end--
    } else {
      break
    }
  }
  return url.slice(0, end)
}

export default function Note({ children }: { children: string }) {
  const parts: React.ReactNode[] = []
  let cursor = 0
  for (const match of children.matchAll(tokens)) {
    const [text, code] = match
    const start = match.index
    parts.push(children.slice(cursor, start))
    if (code) {
      parts.push(<code key={start}>{code}</code>)
      cursor = start + text.length
    } else {
      const url = trimUrl(text)
      parts.push(
        <Link key={start} href={url}>
          {url}
        </Link>,
      )
      cursor = start + url.length
    }
  }
  parts.push(children.slice(cursor))
  return <p>{parts}</p>
}
