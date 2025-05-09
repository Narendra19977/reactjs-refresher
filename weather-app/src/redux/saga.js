// src/redux/sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_WEATHER_REQUEST, fetchWeatherSuccess, fetchWeatherFailure } from './actions/fetchAction';

const apiKey=process.env.REACT_APP_API_KEY
const fetchWeatherApi = (city) =>
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

function* fetchWeather(action) {
  try {
    const response = yield call(fetchWeatherApi, action.payload);
    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherFailure(error.message));
  }
}

function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeather);
}

export default weatherSaga;
