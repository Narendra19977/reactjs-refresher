import React, { Fragment } from 'react'

function WeatherDetail({weatherData}) {
  return (
    <Fragment>
    <h2>{weatherData.name}</h2>
    <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
    
    {weatherData.weather?.map((weatherInfo,index)=>{
             return(
              <ul key={index}>
                <li><img src={`${rootImageURL}${weatherInfo.icon}.png`} alt={weatherData.weather[0].description} /></li>
               <li> <p>Weather: {weatherData.description}</p></li>
              </ul>
             )
    })}
  </Fragment>
  )
}

export default WeatherDetail