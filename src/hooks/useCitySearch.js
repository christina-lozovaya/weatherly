import { useEffect, useState } from "react"
import { searchCities } from "../services/geocoding"
import { mapGeocodingResults } from "../utils/geocoding"

export function useCitySearch(searchQuery) {
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const normalizedQuery = searchQuery.trim()

    if (normalizedQuery.length < 2) {
      setSearchResults([])
      setIsLoading(false)
      setError(null)

      return
    }

    const controller = new AbortController()

    async function loadSearchResults() {
      setIsLoading(true)
      setError(null)

      try {
        const results = await searchCities(normalizedQuery, controller.signal)

        setSearchResults(mapGeocodingResults(results))
      } catch (error) {
        if (error.name !== "AbortError") {
          setSearchResults([])
          setError("Unable to search for cities.")
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    loadSearchResults()
    return () => controller.abort()
  }, [searchQuery])

  return {
    searchResults,
    isLoading,
    error,
  }
}
