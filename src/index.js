/**
  * Global entry point to the app
  *
  * @namespace AppEntryPoint
  */

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Styles
import 'sanitize.css/sanitize.css';
import './global-styles';

import configureStore from './store';
import rootSaga from './rootSaga';
import routes from './routes';


const rootElement = document.getElementById('root');
const initialState = {};
const store = configureStore(initialState);
const history = syncHistoryWithStore(hashHistory, store);

// Run rootSaga
store.runSaga(rootSaga);

ReactDom.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  rootElement
);
