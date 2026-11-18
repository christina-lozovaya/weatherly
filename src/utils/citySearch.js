export function filterCitySearchResults(cities, searchQuery) {
  const normalizedQuery = searchQuery.trim().toLowerCase()

  if (!normalizedQuery) {
    return []
  }

  return cities.filter((city) =>
    city.city.toLowerCase().includes(normalizedQuery)
  )
}
