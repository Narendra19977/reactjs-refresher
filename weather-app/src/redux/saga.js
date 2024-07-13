// src/redux/sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_WEATHER_REQUEST, fetchWeatherSuccess, fetchWeatherFailure } from './actions/fetchAction';

const API_KEY = '8a8f7b0ee612be45d906b30899770be4';
const fetchWeatherApi = (city) =>
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

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
