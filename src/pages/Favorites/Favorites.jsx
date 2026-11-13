import { useState } from "react"
import FavoriteCityList from "../../components/FavoriteCityList/FavoriteCityList.jsx"
import { mockFavorites } from "../../data/mockFavorites.js"

function Favorites() {
  const [favorities, setFavorities] = useState(mockFavorites)

  function handleRemoveFavorities(cityId) {
    setFavorities((currentFavorities) =>
      currentFavorities.filter((city) => city.id !== cityId)
    )
  }

  return (
    <section>
      <h1>Favorites</h1>

      {favorities.length === 0 ? (
        <p>You have no saved cities yet.</p>
      ) : (
        <FavoriteCityList
          cities={favorities}
          onRemove={handleRemoveFavorities}
        />
      )}
    </section>
  )
}

export default Favorites
