import styles from "./CitySearch.module.css"

function CitySearch({
  searchQuery,
  onSearchQueryChange,
  searchResults,
  isSearchResultsOpen,
  onCitySelect,
}) {
  return (
    <section className={styles["city-search"]}>
      <label className={styles["city-search__label"]} htmlFor="city-search">
        Search for a city
      </label>

      <input
        className={styles["city-search__input"]}
        id="city-search"
        name="city-search"
        type="search"
        value={searchQuery}
        onChange={(event) => onSearchQueryChange(event.target.value)}
        placeholder="Search for a city..."
      />

      {isSearchResultsOpen &&
        searchQuery.trim() &&
        (searchResults.length > 0 ? (
          <ul>
            {searchResults.map((city) => (
              <li key={city.id}>
                <button type="button" onClick={() => onCitySelect(city)}>
                  {city.city}, {city.region}, {city.country}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No cities found.</p>
        ))}
    </section>
  )
}

export default CitySearch
