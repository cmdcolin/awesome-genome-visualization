import Button from './Button'
import { type Tool, useAppStore } from './store'

export default function LanguageFilters({ tools }: { tools: Tool[] }) {
  const store = useAppStore()
  const { filters } = store
  const { language = '' } = filters
  const languages = new Set<string>()
  for (const tool of tools) {
    if (tool.language) {
      for (const cat of tool.language) {
        languages.add(cat)
      }
    }
  }
  return (
    <div>
      <label htmlFor="language-select">Filter on language: </label>
      <select
        value={language}
        id="language-select"
        className="select select-bordered w-full max-w-xs"
        onChange={event => {
          store.setFilters({
            ...filters,
            language: event.target.value,
          })
        }}
      >
        <option value="">-- select an option --</option>
        {[...languages].sort().map(lang => (
          <option key={lang} id={lang}>
            {lang}
          </option>
        ))}
      </select>
      <Button
        onClick={() => {
          const { language, ...rest } = filters
          store.setFilters(rest)
        }}
      >
        Clear
      </Button>
    </div>
  )
}
