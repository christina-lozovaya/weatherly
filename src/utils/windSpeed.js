export function convertWindSpeed(kilometersPerHour, unit) {
  if (unit === "miles-per-hour") {
    return Math.round(kilometersPerHour * 0.621371)
  }

  return kilometersPerHour
}

export function getWindSpeedUnitSymbol(unit) {
  return unit === "miles-per-hour" ? "mph" : "km/h"
}
