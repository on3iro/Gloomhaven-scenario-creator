/**
  * User registration page
  *
  * @namespace Register
  */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import * as selectors from './ducks/selectors';

import Wrapper from './Wrapper';
import RegisterForm from './RegisterForm';

import { registerSubmit } from './ducks/actions';


class Register extends Component {
  handleSubmit = values => {
    this.props.registerSubmit(values);
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    return (
      this.props.isLoggedIn
        ? (
          <Redirect to={from} />
        ) : (
            <Wrapper>
              <RegisterForm onSubmi{this.handleSubmit} />
            </Wrapper>
        )
    );
  }
}

Register.propTypes = {
  // TODO
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    registerSubmit,
  }, dispatch);
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: selectors.getLoggedIn(state),
  };
};

export default connect(mapStateToProps, null)(Register);
