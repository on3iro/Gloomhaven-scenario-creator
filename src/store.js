/**
 * Application store which handles application state and connects reducers
 * to middleware.
  *
  * @namespace Reducer
  */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';

import rootReducer from './rootReducer';


export default function configureStore(initialState) {
  const sagaMiddleWare = createSagaMiddleWare();
  const middleWares = [
    sagaMiddleWare,
  ];

  const enhancers = [
    applyMiddleware(...middleWares)
  ];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  store.runSaga = sagaMiddleWare.run;

  return store;
}
