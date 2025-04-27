import { call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  fetchWeatherRequest,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from './reducer/weatherSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { WeatherApiResponse } from './reducer/weatherSlice';

const API_KEY = '8a8f7b0ee612be45d906b30899770be4'; // Replace this

function fetchWeatherApi(city: string) {
  return axios.get<WeatherApiResponse>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
}

function* fetchWeatherSaga(action: PayloadAction<string>) {
  try {
    const response: AxiosResponse<WeatherApiResponse> = yield call(fetchWeatherApi, action.payload);
    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      yield put(fetchWeatherFailure(error.response.data.message || 'Unknown error'));
    } else {
      yield put(fetchWeatherFailure('Something went wrong'));
    }
  }
}

export default function* weatherSaga() {
  yield takeLatest(fetchWeatherRequest.type, fetchWeatherSaga);
}
