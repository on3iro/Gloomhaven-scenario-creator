/**
 * Application store which handles application state and connects reducers
 * to middleware.
  *
  * @namespace Reducer
  */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import { routerReducer } from 'react-router-redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  routing: routerReducer,
});
let store;

if(process.env.NODE_ENV === 'production') {
  store = createStore(reducers, applyMiddleware(promise));
}else {
  store = createStore(reducers, composeEnhancers(applyMiddleware(promise)));
}

export default store;
