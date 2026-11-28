import { useState } from 'react'
import Button from './Button'
import { type Tool, useAppStore } from './store'
import styles from './FilterGroup.module.css'
import {
  chipFacets,
  facetLabels,
  facetOrder,
  matchesTags,
  quickFilters,
  splitTag,
  tagLabel,
} from './facets'

const collapsedChipCount = 8

const dropdownFacets = facetOrder.filter(facet => !chipFacets.includes(facet))

function facetCounts(candidates: Tool[], tags: string[], facet: string) {
  const others = tags.filter(tag => splitTag(tag).facet !== facet)
  const counts = new Map<string, number>()
  for (const tool of candidates) {
    const toolTags = tool.tags ?? []
    if (matchesTags(toolTags, others)) {
      for (const tag of toolTags) {
        if (splitTag(tag).facet === facet) {
          counts.set(tag, (counts.get(tag) ?? 0) + 1)
        }
      }
    }
  }
  return counts
}

export function SearchInput() {
  const query = useAppStore(s => s.query)
  const setQuery = useAppStore(s => s.setQuery)
  return (
    <input
      id="search"
      type="search"
      aria-label="Search tools"
      className={`${styles.control} ${styles.search}`}
      placeholder="Search name, note or tag"
      value={query}
      onChange={event => {
        setQuery(event.target.value)
      }}
    />
  )
}

function FacetRow({
  facet,
  candidates,
}: {
  facet: string
  candidates: Tool[]
}) {
  const tags = useAppStore(s => s.tags)
  const addTag = useAppStore(s => s.addTag)
  const removeTag = useAppStore(s => s.removeTag)
  const [expanded, setExpanded] = useState(false)

  const counts = facetCounts(candidates, tags, facet)
  const entries = [
    ...new Set([
      ...counts.keys(),
      ...tags.filter(t => splitTag(t).facet === facet),
    ]),
  ]
    .map((tag): [string, number] => [tag, counts.get(tag) ?? 0])
    .toSorted((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  const shown = expanded
    ? entries
    : entries.filter(([tag], i) => i < collapsedChipCount || tags.includes(tag))

  return entries.length ? (
    <div className={styles.facetRow}>
      <span className={styles.facetLabel}>{facetLabels[facet]}</span>
      <div className={styles.wrap}>
        {shown.map(([tag, count]) => (
          <button
            key={tag}
            type="button"
            className={styles.chip}
            aria-pressed={tags.includes(tag)}
            onClick={() => {
              if (tags.includes(tag)) {
                removeTag(tag)
              } else {
                addTag(tag)
              }
            }}
          >
            {splitTag(tag).value} <span className={styles.badge}>{count}</span>
          </button>
        ))}
        {entries.length > collapsedChipCount ? (
          <Button
            onClick={() => {
              setExpanded(state => !state)
            }}
          >
            {expanded ? 'Show fewer' : `Show all ${entries.length}`}
          </Button>
        ) : null}
      </div>
    </div>
  ) : null
}

export function FilterPanel({ candidates }: { candidates: Tool[] }) {
  const tags = useAppStore(s => s.tags)
  const addTag = useAppStore(s => s.addTag)
  const removeTag = useAppStore(s => s.removeTag)
  const [showAll, setShowAll] = useState(() =>
    tags.some(tag => !quickFilters.some(([, quickTag]) => quickTag === tag)),
  )

  return (
    <div className={styles.facets}>
      <div className={styles.wrap}>
        {quickFilters.map(([label, tag]) => (
          <button
            key={tag}
            type="button"
            className={`${styles.control} ${styles.quick}`}
            aria-pressed={tags.includes(tag)}
            onClick={() => {
              if (tags.includes(tag)) {
                removeTag(tag)
              } else {
                addTag(tag)
              }
            }}
          >
            {label}
          </button>
        ))}
        <button
          type="button"
          className={`${styles.control} ${styles.quick}`}
          aria-expanded={showAll}
          onClick={() => {
            setShowAll(state => !state)
          }}
        >
          {showAll ? 'Hide tags ▴' : 'All tags ▾'}
        </button>
      </div>
      {showAll ? (
        <>
          {chipFacets.map(facet => (
            <FacetRow key={facet} facet={facet} candidates={candidates} />
          ))}
          <div className={styles.wrap}>
            <MoreFilters candidates={candidates} />
          </div>
        </>
      ) : null}
    </div>
  )
}

function MoreFilters({ candidates }: { candidates: Tool[] }) {
  const tags = useAppStore(s => s.tags)
  const addTag = useAppStore(s => s.addTag)

  const groups = dropdownFacets.map((facet): [string, [string, number][]] => [
    facet,
    [...facetCounts(candidates, tags, facet)]
      .filter(([tag]) => !tags.includes(tag))
      .toSorted((a, b) => a[0].localeCompare(b[0])),
  ])

  return (
    <select
      id="tag-select"
      aria-label="More filters"
      className={styles.control}
      value=""
      onChange={event => {
        addTag(event.target.value)
      }}
    >
      <option value="">More filters…</option>
      {groups
        .filter(([, entries]) => entries.length)
        .map(([facet, entries]) => (
          <optgroup key={facet} label={facetLabels[facet]}>
            {entries.map(([t, n]) => (
              <option key={t} value={t}>
                {splitTag(t).value} ({n})
              </option>
            ))}
          </optgroup>
        ))}
    </select>
  )
}

export function ActiveTags() {
  const tags = useAppStore(s => s.tags)
  const setTags = useAppStore(s => s.setTags)
  const removeTag = useAppStore(s => s.removeTag)
  const setQuery = useAppStore(s => s.setQuery)

  return tags.length ? (
    <div className={styles.wrap}>
      {tags.map(tag => (
        <button
          key={tag}
          type="button"
          className={styles.chip}
          aria-label={`Remove filter ${tagLabel(tag)}`}
          onClick={() => {
            removeTag(tag)
          }}
        >
          {tagLabel(tag)} <span aria-hidden="true">×</span>
        </button>
      ))}
      <Button
        onClick={() => {
          setTags([])
          setQuery('')
        }}
      >
        Clear all
      </Button>
    </div>
  ) : null
}
