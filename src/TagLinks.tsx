import { tagHref, useAppStore } from './store'
import Link from './Link'
import { splitTag } from './facets'

export default function TagLinks({ tags }: { tags: string[] }) {
  const addTag = useAppStore(s => s.addTag)
  return (
    <>
      {tags.map((tag, index) => [
        index > 0 && ', ',
        <Link
          href={tagHref(tag)}
          key={tag}
          onClick={event => {
            addTag(tag)
            event.preventDefault()
          }}
        >
          {splitTag(tag).value}
        </Link>,
      ])}
    </>
  )
}
