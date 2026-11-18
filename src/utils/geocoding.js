export function mapGeocodingResults(results) {
  return results.map((result) => ({
    id: result.id,
    city: result.name,
    region: result.admin1 ?? null,
    country: result.country,
    latitude: result.latitude,
    longitude: result.longitude,
    timezone: result.timezone,
  }))
}
