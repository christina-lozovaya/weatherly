import CurrentWeather from "../../components/CurrentWeather/CurrentWeather"
import DailyForecast from "../../components/DailyForecast/DailyForecast"
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast"
import {
  mockDailyForecast,
  mockHourlyForecast,
  mockWeather,
} from "../../data/mockWeather"

function Home({ temperatureUnit, windSpeedUnit }) {
  return (
    <>
      <CurrentWeather
        weather={mockWeather}
        temperatureUnit={temperatureUnit}
        windSpeedUnit={windSpeedUnit}
      />
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
