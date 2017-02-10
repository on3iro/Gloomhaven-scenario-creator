import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Impressum from './components/impressum';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/impressum" component={Impressum} />
  </Route>
);