import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherRequest } from '../redux/actions/fetchAction';
import WeatherForm from './WeatherForm';
import WeatherDetail from './WeatherDetail';

const Weather = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const handleFetchWeather = (e) => {
    e.preventDefault()
    dispatch(fetchWeatherRequest(city));
  };
  const rootImageURL = "http://openweathermap.org/img/w/"

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm city={city} setCity={setCity} onSubmit={handleFetchWeather} />
      {loading && <p>Loading...</p>}
      {(!error && !loading && weatherData) && (
        <WeatherDetail weatherData={weatherData} />
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Weather;
