import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ForecastWeatherCard from '../ForecastWeatherCard';

const mockForecastData = {
  list: [
    {
      dt: 1717772400,
      main: {
        temp: 313.29,
        feels_like: 312.13,
        temp_min: 312.3,
        temp_max: 313.29,
        pressure: 999,
        sea_level: 999,
        grnd_level: 975,
        humidity: 18,
        temp_kf: 0.99,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 3.38,
        deg: 303,
        gust: 7.7,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-06-07 15:00:00',
    },
  ],
};

describe('ForecastWeatherCard', () => {
  test('renders the forecast weather card with the correct data', () => {
    render(
      <ForecastWeatherCard forecastWeatherInformation={mockForecastData} />
    );

    const dayElement = screen.getByText('Fri');
    const timeElement = screen.getByText('08:30:00 PM');
    const tempMaxElement = screen.getByText('40.29°');
    const tempMinElement = screen.getByText('39.30°');
    const weatherDescriptionElement = screen.getByText('few clouds');

    expect(dayElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(tempMaxElement).toBeInTheDocument();
    expect(tempMinElement).toBeInTheDocument();
    expect(weatherDescriptionElement).toBeInTheDocument();
  });
});
