/**
  * Auth
  *
  * @namespace Auth
  */

import React, { PropTypes, Component } from 'react';

import LoginForm from './LoginForm';
import Wrapper from './Wrapper';
import Button from 'components/Button';
import StyledLink from 'components/StyledLink';


class Auth extends Component {
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

Auth.propTypes = {
  // TODO
};


export default Auth;
