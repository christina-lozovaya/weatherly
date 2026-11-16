import styles from "./Settings.module.css"

function Settings({
  temperatureUnit,
  onTemperatureUnitChange,
  theme,
  onThemeChange,
  windSpeedUnit,
  onWindSpeedUnitChange,
}) {
  return (
    <section className={styles.settings}>
      <h1 className={styles["settings__title"]}>Settings</h1>
      <fieldset className={styles["settings__fieldset"]}>
        <legend className={styles["settings__legend"]}>Temperature unit</legend>

        <label className={styles["settings__option"]}>
          <input
            type="radio"
            name="temperature-unit"
            value="celsius"
            checked={temperatureUnit === "celsius"}
            onChange={(event) => onTemperatureUnitChange(event.target.value)}
          />
          Celsius (°C)
        </label>

        <label className={styles["settings__option"]}>
          <input
            type="radio"
            name="temperature-unit"
            value="fahrenheit"
            checked={temperatureUnit === "fahrenheit"}
            onChange={(event) => onTemperatureUnitChange(event.target.value)}
          />
          Fahrenheit (°F)
        </label>
      </fieldset>

      <fieldset className={styles["settings__fieldset"]}>
        <legend className={styles["settings__legend"]}>Wind speed unit</legend>

        <label className={styles["settings__option"]}>
          <input
            type="radio"
            name="wind-speed-unit"
            value="kilometers-per-hour"
            checked={windSpeedUnit === "kilometers-per-hour"}
            onChange={(event) => onWindSpeedUnitChange(event.target.value)}
          />
          Kilometers per hour (km/h)
        </label>

        <label className={styles["settings__option"]}>
          <input
            type="radio"
            name="wind-speed-unit"
            value="miles-per-hour"
            checked={windSpeedUnit === "miles-per-hour"}
            onChange={(event) => onWindSpeedUnitChange(event.target.value)}
          />
          Miles per hour (mph)
        </label>
      </fieldset>

      <fieldset className={styles["settings__fieldset"]}>
        <legend className={styles["settings__legend"]}>Theme</legend>

        <label className={styles["settings__option"]}>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={(event) => onThemeChange(event.target.value)}
          />
          Dark
        </label>

        <label className={styles["settings__option"]}>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={(event) => onThemeChange(event.target.value)}
          />
          Light
        </label>
      </fieldset>
    </section>
  )
}

export default Settings
