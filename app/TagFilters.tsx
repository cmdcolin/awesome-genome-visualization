import { Tool } from '@/lib/api'

interface Filter {
  interactive?: string
  tag?: string
  language?: string
  platform?: string
}

export default function TagFilters({
  tools,
  setFilters,
  filters,
}: {
  tools: Tool[]
  filters: Filter
  setFilters: (arg: Filter) => void
}) {
  const tags = new Set<string>()
  tools.forEach(tool => {
    tool.tags?.forEach(cat => tags.add(cat))
  })
  return (
    <div className="form-group">
      <label htmlFor="tag-select">Filter on tag: </label>
      <select
        id="tag-select"
        value={filters.tag || ''}
        onChange={event => setFilters({ ...filters, tag: event.target.value })}
      >
        <option value="">-- select an option --</option>
        {[...tags].sort().map(tag => (
          <option key={tag} id={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  )
}
