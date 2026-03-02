import slugify from 'slugify'

export function toolSlug(name: string) {
  return slugify(name, { lower: true, strict: true })
}
