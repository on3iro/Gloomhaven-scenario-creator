/**
  * Auth
  *
  * @namespace Auth
  */

import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import Wrapper from './Wrapper';
import Button from 'components/Button';
import StyledLink from 'components/StyledLink';

import { submitLogin } from './ducks/actions';


class Auth extends Component {
  handleSubmit = values => {
    this.props.submitLogin(values);
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    submitLogin,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Auth);
