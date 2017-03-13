import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getLoggedIn } from './ducks/selectors';


const ProtectedRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isLoggedIn
      ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
);

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: getLoggedIn(state),
  };
}

export default connect(mapStateToProps, null)(ProtectedRoute);
