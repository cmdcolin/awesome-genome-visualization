import { useState } from 'react'
import Button from './Button'
import { type Tool, useAppStore } from './store'
import styles from './FilterGroup.module.css'
import {
  chipFacets,
  facetLabels,
  matchesTags,
  quickFilters,
  splitTag,
  tagLabel,
} from './facets'

const collapsedChipCount = 8

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

function TagSelect({
  label,
  choices,
  candidates,
}: {
  label: string
  choices: [string, string][]
  candidates: Tool[]
}) {
  const tags = useAppStore(s => s.tags)
  const setTags = useAppStore(s => s.setTags)

  const group = choices.map(([, tag]) => tag)
  const others = tags.filter(tag => !group.includes(tag))
  const matching = candidates.filter(tool =>
    matchesTags(tool.tags ?? [], others),
  )
  const selected = group.find(tag => tags.includes(tag)) ?? ''
  const options = choices
    .map(([name, tag]) => ({
      name,
      tag,
      count: matching.filter(tool => (tool.tags ?? []).includes(tag)).length,
    }))
    .filter(({ tag, count }) => count > 0 || tag === selected)

  return (
    <label className={styles.field}>
      {label}
      <select
        className={styles.control}
        value={selected}
        onChange={event => {
          setTags(
            event.target.value === ''
              ? others
              : [...others, event.target.value],
          )
        }}
      >
        <option value="">Any</option>
        {options.map(({ name, tag, count }) => (
          <option key={tag} value={tag}>
            {name} ({count})
          </option>
        ))}
      </select>
    </label>
  )
}

function facetChoices(candidates: Tool[], facet: string) {
  const counts = new Map<string, number>()
  for (const tag of candidates.flatMap(tool => tool.tags ?? [])) {
    if (splitTag(tag).facet === facet) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }
  return [...counts]
    .toSorted((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tag]): [string, string] => [splitTag(tag).value, tag])
}

export function TypeSelect({ candidates }: { candidates: Tool[] }) {
  return (
    <TagSelect label="Show" choices={quickFilters} candidates={candidates} />
  )
}

export function FacetSelect({
  facet,
  candidates,
}: {
  facet: string
  candidates: Tool[]
}) {
  return (
    <TagSelect
      label={facetLabels[facet] ?? facet}
      choices={facetChoices(candidates, facet)}
      candidates={candidates}
    />
  )
}

export function FacetChips({ candidates }: { candidates: Tool[] }) {
  return (
    <div className={styles.facets}>
      {chipFacets.map(facet => (
        <FacetRow key={facet} facet={facet} candidates={candidates} />
      ))}
    </div>
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
