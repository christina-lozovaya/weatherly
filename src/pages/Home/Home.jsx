import CurrentWeather from "../../components/CurrentWeather/CurrentWeather"
import DailyForecast from "../../components/DailyForecast/DailyForecast"
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast"
import {
  mockDailyForecast,
  mockHourlyForecast,
  mockWeather,
} from "../../data/mockWeather"
import styles from "./Home.module.css"

function Home({ temperatureUnit }) {
  return (
    <>
      <CurrentWeather weather={mockWeather} temperatureUnit={temperatureUnit} />
      <HourlyForecast
        forecast={mockHourlyForecast}
        temperatureUnit={temperatureUnit}
      />
      <DailyForecast
        forecast={mockDailyForecast}
        temperatureUnit={temperatureUnit}
      />
    </>
  )
}

export default Home
