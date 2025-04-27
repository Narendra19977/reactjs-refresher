import React from "react";
import { WeatherApiResponse } from "../redux/reducer/weatherSlice";
import styles from "./style/weatherdetail.module.css"; // 👈 Import the CSS Module

interface WeatherDetailProps {
  data: WeatherApiResponse;
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({ data }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Weather in {data.name}</h2>

      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        className={styles.icon}
      />

      <p className={styles.description}>{data.weather[0].description}</p>

      <div className={styles.details}>
        <p>🌡️ Temperature: {data.main.temp}°C</p>
        <p>🤗 Feels Like: {data.main.feels_like}°C</p>
        <p>💧 Humidity: {data.main.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherDetail;
