import styles from "./CurrentWeather.module.css"

function CurrentWeather({ weather }) {
  return (
    <section className={styles["current-weather"]}>
      <h1 className={styles["current-weather__location"]}>
        {weather.city}, {weather.country}
      </h1>
      <p className={styles["current-weather__summary"]}>
        {weather.condition} - {weather.temperature}°C
      </p>
    </section>
  )
}

export default CurrentWeather
