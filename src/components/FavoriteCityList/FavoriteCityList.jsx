import { getWeatherIcon } from "../../utils/weather"
import styles from "./FavoriteCityList.module.css"

function FavoriteCityList({ cities, onRemove }) {
  return (
    <ul className={styles["favorite-city-list"]}>
      {cities.map((city) => (
        <li key={city.id} className={styles["favorite-city-list__item"]}>
          <span
            role="img"
            aria-label={city.condition}
            className={styles["favorite-city-list__icon"]}
          >
            {getWeatherIcon(city.condition)}
          </span>

          <div className={styles["favorite-city-list__info"]}>
            <p className={styles["favorite-city-list__city"]}>{city.city}</p>
            <p className={styles["favorite-city-list__country"]}>
              {city.country}
            </p>
          </div>

          <p className={styles["favorite-city-list__temperature"]}>
            {city.temperature}°C
          </p>

          <button
            type="button"
            className={styles["favorite-city-list__remove-button"]}
            aria-label={`Remove ${city.city} from favorities`}
            onClick={() => onRemove(city.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}

export default FavoriteCityList
