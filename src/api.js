import axios from 'axios';

const GEO_API_URL = 'http://api.openweathermap.org/geo/1.0/direct';
const CURRENT_WEATHER_API_URL =
  'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_WEATHER_API_URL =
  'https://api.openweathermap.org/data/2.5/forecast';
const api_key = process.env.REACT_APP_API_KEY;

if (!api_key) {
  throw new Error('API key is missing. Please check your .env file.');
}

const fetchCoordinates = async (cityName) => {
  const updatedURL = `${GEO_API_URL}?q=${cityName}&limit=1&appid=${api_key}`;
  const response = await axios.get(updatedURL);

  if (response.data.length === 0) {
    throw new Error(`No coordinates found for city: ${cityName}`);
  }

  const { lat, lon } = response.data[0];
  return { lat, lon };
};

const fetchCurrentWeather = async (lat, lon) => {
  const currentWeatherURL = `${CURRENT_WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${api_key}`;
  const response = await axios.get(currentWeatherURL);

  if (!response.data) {
    throw new Error('Error fetching current weather data');
  }

  return response.data;
};

const fetchForecastWeather = async (lat, lon) => {
  const forecastWeatherURL = `${FORECAST_WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${api_key}`;
  const response = await axios.get(forecastWeatherURL);

  if (!response.data) {
    throw new Error('Error fetching forecast weather data');
  }

  return response.data;
};

export const fetchWeatherInfo = async (cityName) => {
  try {
    const { lat, lon } = await fetchCoordinates(cityName);
    const currentWeatherData = await fetchCurrentWeather(lat, lon);
    const forecastWeatherData = await fetchForecastWeather(lat, lon);
    return { currentWeatherData, forecastWeatherData };
  } catch (error) {
    console.error('Error fetching weather info:', error.message);
    throw error;
  }
};
