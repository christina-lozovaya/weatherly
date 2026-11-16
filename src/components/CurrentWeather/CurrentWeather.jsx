import {
  convertTemperature,
  getTemperatureUnitSymbol,
} from "../../utils/temperature"
import { getWeatherIcon } from "../../utils/weather"
import { convertWindSpeed, getWindSpeedUnitSymbol } from "../../utils/windSpeed"
import styles from "./CurrentWeather.module.css"

function CurrentWeather({ weather, temperatureUnit, windSpeedUnit }) {
  const temperature = convertTemperature(weather.temperature, temperatureUnit)
  const feelsLike = convertTemperature(weather.feelsLike, temperatureUnit)
  const temperatureUnitSymbol = getTemperatureUnitSymbol(temperatureUnit)
  const windSpeed = convertWindSpeed(weather.windSpeed, windSpeedUnit)
  const windSpeedSymbol = getWindSpeedUnitSymbol(windSpeedUnit)

  return (
    <section className={styles["current-weather"]}>
      <span className={styles["current-weather__icon"]} aria-hidden="true">
        {getWeatherIcon(weather.condition)}
      </span>
      <h1 className={styles["current-weather__location"]}>
        {weather.city}, {weather.country}
      </h1>
      <p className={styles["current-weather__temperature"]}>
        {temperature}
        {temperatureUnitSymbol}
      </p>

      <p className={styles["current-weather__summary"]}>{weather.condition}</p>

      <p className={styles["current-weather__feels-like"]}>
        Feels like {feelsLike}
        {temperatureUnitSymbol}
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
            {windSpeed} {windSpeedSymbol} · {weather.windDirection}
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
