/**
  * User registration page
  *
  * @namespace Register
  */

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as selectors from '../ducks/selectors';

import Wrapper from '../Wrapper';
import RegisterForm from './RegisterForm';


const Register = props => {
  const { from } = props.location.state || { from: { pathname: '/' } };

  return (
    props.isLoggedIn
    ? (
      <Redirect to={from} />
    ) : (
      <Wrapper>
        <RegisterForm />
      </Wrapper>
    )
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: selectors.getLoggedIn(state),
  };
};

export default connect(mapStateToProps, null)(Register);
