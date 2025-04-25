import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import weatherReducer from '../reducers/fetchReducer';
import weatherSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(weatherReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(weatherSaga);

export default store;
