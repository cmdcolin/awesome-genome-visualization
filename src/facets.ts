export const contentFacets = ['kind', 'task', 'data', 'view', 'field']

export const chipFacets = [...contentFacets, 'platform']

export const metaFacetLabels: Record<string, string> = {
  platform: 'Platform',
  stack: 'Built with',
  ui: 'Interface',
  with: 'Works with',
  license: 'License',
}

export const facetOrder = [
  ...contentFacets,
  'ui',
  'platform',
  'stack',
  'with',
  'license',
  'status',
]

export const facetLabels: Record<string, string> = {
  kind: 'Kind',
  task: 'Task',
  data: 'Data',
  view: 'View',
  field: 'Field',
  ...metaFacetLabels,
  status: 'Status',
}

export const inactiveStatuses = [
  'status:Deadlink',
  'status:Unavailable',
  'status:Archived',
  'status:Historical',
]

export function tagLabel(tag: string) {
  const { facet, value } = splitTag(tag)
  return `${facetLabels[facet] ?? facet}: ${value}`
}

export function splitTag(tag: string) {
  const i = tag.indexOf(':')
  return { facet: tag.slice(0, i), value: tag.slice(i + 1) }
}

export function matchesTags(toolTags: string[], selected: string[]) {
  const facets = new Set(selected.map(tag => splitTag(tag).facet))
  return [...facets].every(facet =>
    selected.some(
      tag => splitTag(tag).facet === facet && toolTags.includes(tag),
    ),
  )
}

export function isInactive(toolTags: string[]) {
  return toolTags.some(tag => inactiveStatuses.includes(tag))
}
