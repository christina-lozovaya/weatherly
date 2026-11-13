import { getWeatherIcon } from "../../utils/weather"
import styles from "./DailyForecast.module.css"

function DailyForecast({ forecast }) {
  return (
    <section className={styles["daily-forecast"]}>
      <h2 className={styles["daily-forecast__title"]}>7-Day Forecast</h2>

      <ul className={styles["daily-forecast__list"]}>
        {forecast.map((dailyWeather) => (
          <li key={dailyWeather.id} className={styles["daily-forecast__item"]}>
            <time
              dateTime={dailyWeather.id}
              className={styles["daily-forecast__day"]}
            >
              {dailyWeather.day}
            </time>
            <span
              className={styles["daily-forecast__icon"]}
              role="img"
              aria-label={dailyWeather.condition}
            >
              {getWeatherIcon(dailyWeather.condition)}
            </span>
            <p className={styles["daily-forecast__temperature"]}>
              {dailyWeather.high}° / {dailyWeather.low}°
            </p>
            <p className={styles["daily-forecast__precipitation"]}>
              {dailyWeather.precipitation}%
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default DailyForecast
