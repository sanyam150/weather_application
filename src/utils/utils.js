import React from 'react';
import { HiSun } from 'react-icons/hi';
import { IoRainySharp } from 'react-icons/io5';
import { FaCloud } from 'react-icons/fa';

export const temperatureConvert = (temp) => {
  let celsius = temp - 273;
  return celsius.toFixed(2);
};

export const timeData = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  const day = date.toLocaleString('en-US', { weekday: 'long' });
  const dayOfMonth = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return { day, dayOfMonth, month, year, time };
};

export const weatherImage = (weatherType) => {
  const weatherUpdated = weatherType.toLowerCase();
  switch (weatherUpdated) {
    case 'rain':
      return (
        <IoRainySharp
          style={{ fontSize: '4rem', color: 'rgb(13, 202, 240)' }}
        />
      );
    case 'clouds':
      return (
        <FaCloud style={{ fontSize: '4rem', color: 'rgb(13, 202, 240)' }} />
      );
    case 'clear':
      return <HiSun style={{ fontSize: '4rem', color: 'rgb(253, 184, 19)' }} />;
    default:
      return <HiSun style={{ fontSize: '4rem', color: 'rgb(253, 184, 19)' }} />;
  }
};
