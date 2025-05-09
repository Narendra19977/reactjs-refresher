import React, { useEffect, useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./redux/store";
import { fetchWeatherRequest } from "./redux/reducer/weatherSlice";
import WeatherForm from "./components/WeatherForm";
import WeatherDetail from "./components/WeatherDetail";
import styles from "../src/components/style/weather.module.css"; // Import the CSS Module

const Weather: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather
  );

  const [city, setCity] = useState<string>("London"); // Default city

  useEffect(() => {
    dispatch(fetchWeatherRequest(city));
  }, [dispatch, city]);

  const handleSearch = (userInputCity: string) => {
    setCity(userInputCity);
  };

  return (
    <div className={styles.weather}>
      <h1>Weather App</h1>
      <WeatherForm onSearch={handleSearch} />

      {loading && <p className={styles.loading}>Loading weather data...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}

      {(!error && data) && (
        <div className={styles.weatherContainer}>
          <WeatherDetail data={data} />
        </div>
      )}
    </div>
  );
};

export default Weather;
