import styles from "./App.module.css"
import Home from "./pages/Home/Home.jsx"
import Favorites from "./pages/Favorites/Favorites.jsx"
import Settings from "./pages/Settings/Settings.jsx"
import { Route, Routes } from "react-router"
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import { useLocalStorage } from "./hooks/useLocalStorage.js"

function App() {
  const [temperatureUnit, setTemperatureUnit] = useLocalStorage(
    "weatherly-temperature-unit",
    "celsius"
  )

  const [windSpeedUnit, setWindSpeedUnit] = useLocalStorage(
    "weatherly-wind-speed-unit",
    "kilometers-per-hour"
  )

  const [theme, setTheme] = useLocalStorage("weatherly-theme", "dark")

  return (
    <main
      className={`${styles.app} ${theme === "light" ? styles["app--light"] : ""}`}
    >
      <div className={styles["app__layout"]}>
        <Sidebar />

        <div className={styles["app__content"]}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  temperatureUnit={temperatureUnit}
                  windSpeedUnit={windSpeedUnit}
                />
              }
            />
            <Route path="/favorites" element={<Favorites />} />
            <Route
              path="/settings"
              element={
                <Settings
                  temperatureUnit={temperatureUnit}
                  onTemperatureUnitChange={setTemperatureUnit}
                  windSpeedUnit={windSpeedUnit}
                  onWindSpeedUnitChange={setWindSpeedUnit}
                  theme={theme}
                  onThemeChange={setTheme}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </main>
  )
}

export default App
