export const contentFacets = ['kind', 'task', 'data', 'view', 'field']

export const quickFilters: [string, string][] = [
  ['Genome browsers', 'kind:Genome browser'],
  ['Synteny/comparative', 'field:Comparative genomics'],
  ['Dotplots', 'view:Dotplot'],
  ['Multiple alignments (MSA)', 'data:MSA'],
  ['Graph genomes', 'data:Genome graph'],
  ['Text based', 'ui:Terminal'],
]

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

export const chipFacets = facetOrder.filter(
  facet => facet !== 'platform' && facet !== 'stack',
)

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

export function hasHiddenTags(tags: string[]) {
  return tags.some(
    tag =>
      chipFacets.includes(splitTag(tag).facet) &&
      !quickFilters.some(([, quickTag]) => quickTag === tag),
  )
}
