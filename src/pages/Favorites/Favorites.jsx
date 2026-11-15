import FavoriteCityList from "../../components/FavoriteCityList/FavoriteCityList.jsx"
import { mockFavorites } from "../../data/mockFavorites.js"
import { useLocalStorage } from "../../hooks/useLocalStorage.js"

function Favorites() {
  const [favorites, setFavorites] = useLocalStorage(
    "weatherly-favorites",
    mockFavorites
  )

  function handleRemoveFavorites(cityId) {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((city) => city.id !== cityId)
    )
  }

  return (
    <section>
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>You have no saved cities yet.</p>
      ) : (
        <FavoriteCityList cities={favorites} onRemove={handleRemoveFavorites} />
      )}
    </section>
  )
}

export default Favorites
