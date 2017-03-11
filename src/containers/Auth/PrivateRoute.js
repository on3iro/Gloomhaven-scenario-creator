import React from 'react';
import { Route } from 'react-router';


const PrivateRoute = ({ component, ...rest }) => {
  <Route {...rest} render={props => (
    props.isLoggedIn ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from 'props.location' }
      }} />
    )
  )} />
}

export default PrivateRoute;
