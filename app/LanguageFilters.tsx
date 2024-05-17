import { Tool } from '@/lib/api'

interface Filter {
  interactive?: string
  tag?: string
  language?: string
  platform?: string
}

export default function LanguageFilters({
  tools,
  setFilters,
  filters,
}: {
  tools: Tool[]
  filters: Filter
  setFilters: (argument: Filter) => void
}) {
  const languages = new Set<string>()
  for (const tool of tools) {
    if (tool.language) {
      for (const cat of tool.language) {
        languages.add(cat)
      }
    }
  }
  return (
    <div className="form-group">
      <label htmlFor="language-select">Filter on language: </label>
      <select
        value={filters.language || ''}
        id="language-select"
        onChange={event =>
          setFilters({ ...filters, language: event.target.value })
        }
      >
        <option value="">-- select an option --</option>
        {[...languages].sort().map(tag => (
          <option key={tag} id={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  )
}
