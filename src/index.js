/**
  * Global entry point to the app
  *
  * @namespace AppEntryPoint
  */

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Styles
import 'sanitize.css/sanitize.css';
import './global-styles';

import configureStore from './store';
import rootSaga from './rootSaga';
import App from 'containers/App';


const rootElement = document.getElementById('root');
const initialState = {};
const store = configureStore(initialState);

// Run rootSaga
store.runSaga(rootSaga);

ReactDom.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  rootElement
);
