import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from "./weatherActionType";
export interface WeatherType {
  temprature: string;
  humidity: string;
  description: string;
}
export interface WeatherErrorType {
  message: string
}
export const fetchWeatherRequest = (city: string) => ({
  type: FETCH_WEATHER_REQUEST,
  payload: city,
});

export const fetchWeatherSuccess = (weather: WeatherType) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: weather,
});

export const fetchWeatherFailure = (error: WeatherErrorType) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});
export type WeatherAction =
  | ReturnType<typeof fetchWeatherRequest>
  | ReturnType<typeof fetchWeatherSuccess>
  | ReturnType<typeof fetchWeatherFailure>;
