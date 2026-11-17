import { useState } from "react"
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather"
import DailyForecast from "../../components/DailyForecast/DailyForecast"
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast"
import {
  mockDailyForecast,
  mockHourlyForecast,
  mockWeather,
} from "../../data/mockWeather"
import CitySearch from "../../components/CitySearch/CitySearch"
import { mockCitySearchResults } from "../../data/mockCitySearchResults"
import { filterCitySearchResults } from "../../utils/citySearch"

function Home({ temperatureUnit, windSpeedUnit }) {
  const [searchQuery, setSearchQuery] = useState("")

  const searchResults = filterCitySearchResults(
    mockCitySearchResults,
    searchQuery
  )

  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false)

  function handleSearchQueryChange(query) {
    setSearchQuery(query)
    setIsSearchResultsOpen(true)
  }

  function handleCitySelect(city) {
    setSearchQuery(city.city)
    setIsSearchResultsOpen(false)
  }

  return (
    <>
      <CitySearch
        searchQuery={searchQuery}
        onSearchQueryChange={handleSearchQueryChange}
        searchResults={searchResults}
        isSearchResultsOpen={isSearchResultsOpen}
        onCitySelect={handleCitySelect}
      />
      <CurrentWeather
        weather={mockWeather}
        temperatureUnit={temperatureUnit}
        windSpeedUnit={windSpeedUnit}
      />
      <HourlyForecast
        forecast={mockHourlyForecast}
        temperatureUnit={temperatureUnit}
      />
      <DailyForecast
        forecast={mockDailyForecast}
        temperatureUnit={temperatureUnit}
      />
    </>
  )
}

export default Home
