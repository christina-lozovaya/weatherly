export function convertTemperature(celsius, unit) {
  if (unit === "fahrenheit") {
    return Math.round((celsius * 9) / 5 + 32)
  }

  return celsius
}

export function getTemperatureUnitSymbol(unit) {
  return unit === "fahrenheit" ? "°F" : "°C"
}
