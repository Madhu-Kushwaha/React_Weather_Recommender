import { useWeatherDispatch } from '../context/WeatherContext';
import  fetchWeather  from '../utils/weatherApi';

export default function useWeather() {
  const dispatch = useWeatherDispatch();

  const getWeather = async (city) => {
    try {
      const data = await fetchWeather(city);
      dispatch({ type: 'SET_WEATHER', payload: data });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err.message });
    }
  };

  return { getWeather };
}