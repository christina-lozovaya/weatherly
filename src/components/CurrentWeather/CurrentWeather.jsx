import { getWeatherIcon } from "../../utils/weather"
import styles from "./CurrentWeather.module.css"

function CurrentWeather({ weather }) {
  return (
    <section className={styles["current-weather"]}>
      <span className={styles["current-weather__icon"]} aria-hidden="true">
        {getWeatherIcon(weather.condition)}
      </span>
      <h1 className={styles["current-weather__location"]}>
        {weather.city}, {weather.country}
      </h1>
      <p className={styles["current-weather__temperature"]}>
        {weather.temperature}°C
      </p>

      <p className={styles["current-weather__summary"]}>{weather.condition}</p>

      <p className={styles["current-weather__feels-like"]}>
        Feels like {weather.feelsLike}°C
      </p>
      <dl className={styles["current-weather__details"]}>
        <div className={styles["current-weather__detail"]}>
          <dt className={styles["current-weather__detail-label"]}>Humidity</dt>
          <dd className={styles["current-weather__detail-value"]}>
            {weather.humidity}%
          </dd>
        </div>

        <div className={styles["current-weather__detail"]}>
          <dt className={styles["current-weather__detail-label"]}>Wind</dt>
          <dd className={styles["current-weather__detail-value"]}>
            {weather.windSpeed} km/h · {weather.windDirection}
          </dd>
        </div>

        <div className={styles["current-weather__detail"]}>
          <dt className={styles["current-weather__detail-label"]}>
            Precipitation
          </dt>
          <dd className={styles["current-weather__detail-value"]}>
            {weather.precipitation} mm
          </dd>
        </div>
      </dl>
    </section>
  )
}

export default CurrentWeather
