import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CurrentWeatherCard from '../CurrentWeatherCard';
import { mockData } from '../../mockData/mockData';

test('renders CurrentWeatherCard', () => {
  render(
    <CurrentWeatherCard
      currentWeatherInformation={mockData.weather_information.currentWeather}
    />
  );
  const currentWeatherHeading = screen.getByText(/Current Weather/i);
  expect(currentWeatherHeading).toBeInTheDocument();
});
