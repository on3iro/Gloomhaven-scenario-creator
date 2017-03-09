import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Home from 'containers/HomePage';
import Impressum from 'containers/ImpressumPage';
import UserProfile from 'containers/ProfilePage';
import Register from 'containers/RegisterPage';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/impressum" component={Impressum} />
    <Route path="/profile" component={UserProfile} />
    <Route path="/register" component={Register} />
  </Route>
);
