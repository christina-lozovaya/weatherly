const geocodingApiUrl = "https://geocoding-api.open-meteo.com/v1/search"

export async function searchCities(searchQuery, signal) {
  const normalizedQuery = searchQuery.trim()

  if (normalizedQuery.length < 2) {
    return []
  }

  const searchParams = new URLSearchParams({
    name: normalizedQuery,
    count: "5",
    language: "en",
    format: "json",
  })

  const response = await fetch(`${geocodingApiUrl}?${searchParams}`, {
    signal,
  })

  if (!response.ok) {
    throw new Error("Unable to search for cities.")
  }

  const data = await response.json()

  return data?.results ?? []
}
