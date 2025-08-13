import { WeatherProvider, useWeatherState, useWeatherDispatch } from './context/WeatherContext';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import HistoryList from './components/HistoryList';
import { fetchWeather } from './utils/weatherApi';
import  useWeather  from "./hooks/useWeather";


function WeatherContainer() {
  const { weather, loading, error } = useWeather();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <SearchBar />
      {loading && <p>Loading weather...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && weather && <WeatherCard data={weather} />}
      {!loading && !error && !weather && (
        <p>Search for a city to see the weather</p>
      )}
    </div>
  );
}

export default function App() {
  return (
    <WeatherProvider>
      <WeatherContainer />
    </WeatherProvider>
  );
}

