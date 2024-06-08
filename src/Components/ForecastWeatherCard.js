import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { timeData, temperatureConvert, weatherImage } from '../utils/utils';

const ForecastWeatherCard = ({ forecastWeatherInformation }) => {
  const updateWeatherList = (info) => {
    if (info && info.list) {
      return info.list.slice(0, 5);
    }
  };
  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {
    const list = updateWeatherList(forecastWeatherInformation);
    setWeatherList(list);
  }, [forecastWeatherInformation]);

  return (
    <>
      {weatherList &&
        weatherList.length &&
        weatherList.map((data, index) => (
          <div
            className='card'
            style={{
              minWidth: '184px',
              marginLeft: '4px',
              textAlign: 'center',
            }}
            key={`S.No${index}`}
          >
            <div className='card-body'>
              <h5 className='card-title' style={{ color: 'rgb(13, 202, 240)' }}>
                {timeData(data.dt).day.slice(0, 3)}
              </h5>
              <h5 className='card-title'>{timeData(data.dt).time}</h5>
              <p className='card-text'>
                <div>
                  <span>{temperatureConvert(data.main.temp_max)}&deg;</span>
                  <FaArrowUp className='style_icons' />/
                  <span>{temperatureConvert(data.main.temp_min)}&deg;</span>
                  <FaArrowDown className='style_icons' />
                </div>
              </p>
              {weatherImage(data.weather[0].main)}
              <p className='card-text'>{data.weather[0].description}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default ForecastWeatherCard;
