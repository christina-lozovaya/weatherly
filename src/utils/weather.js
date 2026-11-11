const conditionIcons = Object.freeze({
  "Partly Cloudy": "🌤️",
  Sunny: "☀️",
  Cloudy: "☁️",
  Rain: "🌧️",
  Clear: "🌙",
})

export function getWeatherIcon(condition) {
  return conditionIcons[condition] ?? "🌡️"
}
