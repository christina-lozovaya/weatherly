import CurrentWeather from "../../components/CurrentWeather/CurrentWeather"
import DailyForecast from "../../components/DailyForecast/DailyForecast"
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast"
import {
  mockDailyForecast,
  mockHourlyForecast,
  mockWeather,
} from "../../data/mockWeather"
import styles from "./Home.module.css"

function Home() {
  return (
    <>
      <CurrentWeather weather={mockWeather} />
      <HourlyForecast forecast={mockHourlyForecast} />
      <DailyForecast forecast={mockDailyForecast} />
    </>
  )
}

export default Home
