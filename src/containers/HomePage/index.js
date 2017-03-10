/**
  * HomePage of the App
  *
  * @namespace HomePage
  */

import React, { PropTypes, Component } from 'react';

import LoginForm from './LoginForm';
import Wrapper from './Wrapper';
import Button from 'components/Button';
import StyledLink from 'components/StyledLink';


class Home extends Component {
  handleSubmit = (values) => {
    console.log(values);
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

Home.propTypes = {
  // TODO
};


export default Home;
