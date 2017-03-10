/**
  * Login
  *
  * @namespace Login
  */

import React, { PropTypes, Component } from 'react';

import LoginForm from './LoginForm';
import Wrapper from './Wrapper';
import Button from 'components/Button';
import StyledLink from 'components/StyledLink';


class Login extends Component {
  handleSubmit = (values) => {
  }

  render() {
    return (
      <Wrapper>
        <LoginForm onSubmit={this.handleSubmit} />
        <StyledLink to="/register">Register</StyledLink>
      </Wrapper>
    );
  }
}

Login.propTypes = {
  // TODO
};


export default Login;
