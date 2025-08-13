// import { fetchWeather } from './utils/weatherApi';

export const CITY_SUGGESTIONS = ["Delhi", "Mumbai", "London", "New York", "Paris", "Tokyo"];
export const CONDITION_ICONS = { sunny: "☀️", cloudy: "☁️", rainy: "🌧️" };

export const filterCities = (query) => CITY_SUGGESTIONS.filter(city => city.toLowerCase().includes(query.toLowerCase()));

export default async function mockFetchWeather(city) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        city,
        temperature: 25,
        condition: "sunny",
        wind: 10,
        humidity: 50,
      });
    }, 500);
  });
}

export async function fetchOpenWeather(city, apiKey) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  if (!res.ok) throw new Error("City not found");
  const data = await res.json();
  return {
    city: data.name,
    temperature: data.main.temp,
    condition: data.weather[0].main.toLowerCase(),
    wind: data.wind.speed,
    humidity: data.main.humidity,
  };
}

// src/utils/weatherApi.js
const API_KEY = import.meta.env.VITE_OWM_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(city) {
  if (!API_KEY) {
    throw new Error("Missing API key: Set VITE_OWM_API_KEY in your .env file");
  }

  const res = await fetch(`${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
  if (!res.ok) {
    throw new Error('City not found');
  }
  return await res.json();
}
