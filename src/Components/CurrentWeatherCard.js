import React from 'react';
import './css/currentWeatherCard.css';
import { FaArrowUp, FaArrowDown, FaCompressAlt } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
import { WiCloudyWindy } from 'react-icons/wi';
import { temperatureConvert } from '../utils/utils';

const CurrentWeatherCard = ({ currentWeatherInformation }) => {
  const { name, main, weather, wind } = currentWeatherInformation;
  return (
    <>
      {weather && weather.length ? (
        <>
          <div className='card' style={{ margin: '1vw' }}>
            <div className='card-body'>
              <h3 className='card-title'>Current Weather</h3>
              <h5 style={{ padding: '1vw' }} className='style_icons'>
                {name}
              </h5>
              <h1>
                <span>{temperatureConvert(main && main.temp)}&deg;C</span>
              </h1>
              <h5 style={{ padding: '1vw' }} className='style_icons'>
                {weather && weather[0].description}
              </h5>
            </div>
          </div>
          <div className='card' style={{ margin: '1vw' }}>
            <div className='card-body'>
              <h5
                className='card-title'
                style={{ textAlign: 'center', marginTop: '1vw' }}
              >
                Feels like
              </h5>
              <div style={{ width: 'fit-content', margin: 'auto' }}>
                <div className='card_wrapper'>
                  <div className='card_element_margin'>
                    <FaArrowUp className='style_icons' />
                    <span>
                      {temperatureConvert(main && main.temp_max)}&deg;
                    </span>
                  </div>
                  <div className='card_element_margin'>
                    <FaArrowDown className='style_icons' />
                    <span>
                      {temperatureConvert(main && main.temp_min)}&deg;
                    </span>
                  </div>
                </div>
                <div className='card_wrapper'>
                  <div className='card_element_margin'>
                    <FaDroplet className='style_icons' />
                    <span>Humidity</span>
                  </div>
                  <div className='card_element_margin'>
                    {main && main.humidity}%
                  </div>
                </div>
                <div className='card_wrapper'>
                  <div className='card_element_margin'>
                    <WiCloudyWindy className='style_icons' />
                    <span>Wind</span>
                  </div>
                  <div className='card_element_margin'>
                    {wind && wind.speed} mph
                  </div>
                </div>
                <div className='card_wrapper'>
                  <div className='card_element_margin'>
                    <FaCompressAlt className='style_icons' />
                    <span>Pressure</span>
                  </div>
                  <div className='card_element_margin'>
                    {main && main.pressure}hpa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default CurrentWeatherCard;
