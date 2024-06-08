import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherInformation } from './redux/slice/WeatherSlice';
import Header from './Components/Header';
import CurrentWeatherCard from './Components/CurrentWeatherCard';
import ForecastWeatherCard from './Components/ForecastWeatherCard';

function App() {
  const dispatch = useDispatch();
  const { currentWeather, forecastWeather, error } = useSelector((state) => {
    return {
      currentWeather: state.weather_information.currentWeather,
      forecastWeather: state.weather_information.forecastWeather,
      error: state.weather_information.error,
    };
  });
  const [cityName, setCityName] = useState('');
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState(currentWeather);
  const [forecastWeatherInfo, setForecastWeatherInfo] =
    useState(forecastWeather);
  const [errorExist, setErrorExist] = useState('');

  useEffect(() => {
    if (currentWeather) setCurrentWeatherInfo(currentWeather);
    if (forecastWeather) setForecastWeatherInfo(forecastWeather);
  }, [dispatch, currentWeather, forecastWeather]);

  useEffect(() => {
    if (error) {
      setErrorExist(error);
    }
  }, [error]);

  const validateInformation = (text) => {
    if (!text.trim()) return false;
    return true;
  };

  const handleSearchInformation = () => {
    if (!validateInformation(cityName)) {
      alert('This field must be non empty');
      return;
    }
    dispatch(fetchWeatherInformation(cityName));
    setErrorExist('');
    setCityName('');
  };

  return (
    <div id='App_container'>
      <Header />
      <div className='input-group mb-3'>
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon1'
          onClick={handleSearchInformation}
        >
          Search
        </button>
        <input
          type='text'
          className='form-control'
          placeholder='Enter City Name'
          aria-label='Example text with button addon'
          aria-describedby='button-addon1'
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>
      {!errorExist ? (
        <>
          <div className='current_Weather_container'>
            <CurrentWeatherCard
              currentWeatherInformation={currentWeatherInfo}
            />
          </div>
          <div className='forecast_Weather_container'>
            <ForecastWeatherCard
              forecastWeatherInformation={forecastWeatherInfo}
            />
          </div>
        </>
      ) : (
        <div>{errorExist}</div>
      )}
    </div>
  );
}

export default App;
