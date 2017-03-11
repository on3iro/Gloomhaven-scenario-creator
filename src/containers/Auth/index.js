/**
  * Auth
  *
  * @namespace Auth
  */

import React, { PropTypes, Component } from 'react';

import Login from './Login';


class Auth extends Component {
  render() {
    return (
      <Login />
    );
  }
}

Auth.propTypes = {
  // TODO
};

export default Auth;
