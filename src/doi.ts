export function doiUrl(doi: string) {
  return doi.startsWith('http') ? doi : `https://doi.org/${doi}`
}
