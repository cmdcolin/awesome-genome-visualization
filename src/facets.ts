export const contentFacets = ['kind', 'task', 'data', 'view', 'field']

export const metaFacetLabels: Record<string, string> = {
  stack: 'Language',
  platform: 'Platform',
  ui: 'Interface',
  with: 'Works with',
  license: 'License',
  status: 'Status',
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

export function splitTag(tag: string) {
  const i = tag.indexOf(':')
  return { facet: tag.slice(0, i), value: tag.slice(i + 1) }
}
