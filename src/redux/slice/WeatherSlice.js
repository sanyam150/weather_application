import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherInfo } from '../../api';

export const fetchWeatherInformation = createAsyncThunk(
  'WeatherInformation/fetchWeatherInformation',
  async (countryName) => {
    const { currentWeatherData, forecastWeatherData } = await fetchWeatherInfo(
      countryName
    );
    return { currentWeatherData, forecastWeatherData };
  }
);

const Weather_location_info = createSlice({
  name: 'weather',
  initialState: {
    loading: false,
    currentWeather: [],
    forecastWeather: [],
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherInformation.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeatherInformation.fulfilled, (state, action) => {
        state.loading = false;
        state.currentWeather = action.payload.currentWeatherData;
        state.forecastWeather = action.payload.forecastWeatherData;
        state.error = '';
      })
      .addCase(fetchWeatherInformation.rejected, (state, action) => {
        state.loading = false;
        state.currentWeather = [];
        state.forecastWeather = [];
        state.error = action.error.message;
      });
  },
});

export default Weather_location_info.reducer;
