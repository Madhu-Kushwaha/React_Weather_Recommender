export const CITY_SUGGESTIONS = ["Delhi", "Mumbai", "Chennai", "Kolkata", "Bangalore", "Pune"];

export function filterCities(query) {
  return CITY_SUGGESTIONS.filter(c => c.toLowerCase().includes(query.toLowerCase()));
}