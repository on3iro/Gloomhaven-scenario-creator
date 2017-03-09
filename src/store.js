/**
 * Application store which handles application state and connects reducers
 * to middleware.
  *
  * @namespace Reducer
  */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import promise from 'redux-promise';
import { routerReducer } from 'react-router-redux';

import testSaga from 'containers/HomePage/ducks/sagas';
import HomePageReducers from 'containers/HomePage/ducks/reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  routing: routerReducer,
  HomePageReducers,
});
let store;

const sagaMiddleWare = createSagaMiddleWare();

if(process.env.NODE_ENV === 'production') {
  store = createStore(reducers, applyMiddleware(promise, sagaMiddleWare));
}else {
  store = createStore(reducers, composeEnhancers(applyMiddleware(promise, sagaMiddleWare)));
}

sagaMiddleWare.run(testSaga);

export default store;
