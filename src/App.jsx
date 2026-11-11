import { mockWeather } from "./data/mockWeather.js"
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.jsx"
import styles from "./App.module.css"

function App() {
  return (
    <main className={styles.app}>
      <CurrentWeather weather={mockWeather} />
    </main>
  )
}

export default App
