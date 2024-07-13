// src/components/Weather.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherRequest } from '../redux/actions/fetchAction';

const Weather = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const handleFetchWeather = () => {
    dispatch(fetchWeatherRequest(city));
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleFetchWeather}>Fetch Weather</button>
      {loading && <p>Loading...</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Weather;
