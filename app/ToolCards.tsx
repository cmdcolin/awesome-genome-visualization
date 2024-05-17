import { Tool } from '@/lib/api'
import ToolCard from './ToolCard'

interface Filter {
  interactive?: string
  tag?: string
  language?: string
  platform?: string
}

export default function ToolCards({
  tools,
  filters,
  setSelected,
  setFilters,
}: {
  tools: Tool[]
  filters: Filter
  setSelected: (argument: { selected: string }) => void
  setFilters: (argument: Filter) => void
}) {
  return tools.map(tool => (
    <ToolCard
      tool={tool}
      key={tool.name}
      setSelected={setSelected}
      setFilters={setFilters}
      filters={filters}
    />
  ))
}
