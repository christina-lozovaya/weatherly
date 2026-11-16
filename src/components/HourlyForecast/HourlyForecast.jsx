import {
  convertTemperature,
  getTemperatureUnitSymbol,
} from "../../utils/temperature"
import { getWeatherIcon } from "../../utils/weather"
import styles from "./HourlyForecast.module.css"

function HourlyForecast({ forecast, temperatureUnit }) {
  const temperatureUnitSymbol = getTemperatureUnitSymbol(temperatureUnit)

  return (
    <section className={styles["hourly-forecast"]}>
      <h2 className={styles["hourly-forecast__title"]}>Hourly Forecast</h2>

      <ul className={styles["hourly-forecast__list"]}>
        {forecast.map((hour) => (
          <li key={hour.id} className={styles["hourly-forecast__item"]}>
            <p className={styles["hourly-forecast__time"]}>{hour.time}</p>
            <span
              className={styles["hourly-forecast__icon"]}
              role="img"
              aria-label={hour.condition}
            >
              {getWeatherIcon(hour.condition)}
            </span>
            <p className={styles["hourly-forecast__temperature"]}>
              {convertTemperature(hour.temperature, temperatureUnit)}
              {temperatureUnitSymbol}
            </p>
            <p className={styles["hourly-forecast__precipitation"]}>
              {hour.precipitation}%
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HourlyForecast
