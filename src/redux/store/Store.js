import { configureStore } from '@reduxjs/toolkit';
import weather_location_info from '../slice/WeatherSlice';

const store = configureStore({
  reducer: {
    weather_information: weather_location_info,
  },
});

export default store;
