import styles from "./Settings.module.css"

function Settings({ temperatureUnit, onTemperatureUnitChange }) {
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
    </section>
  )
}

export default Settings
