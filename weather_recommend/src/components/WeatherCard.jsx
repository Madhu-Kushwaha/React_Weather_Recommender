import { getOutfitAdvice } from '../utils/recommendations';

export default function WeatherCard({ data }) {
  if (!data) return null;
  const { name, main, weather, wind } = data;

  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h2 className="text-lg font-bold">{name}</h2>
      <p>{main.temp}°C, {weather[0].description}</p>
      <p>Wind: {wind.speed} m/s</p>
      <p>Humidity: {main.humidity}%</p>
      <p className="mt-2 font-semibold">{getOutfitAdvice(main.temp, weather[0].main)}</p>
    </div>
  );
}