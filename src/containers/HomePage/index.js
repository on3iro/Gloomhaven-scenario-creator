/**
  * HomePage of the App
  *
  * @namespace HomePage
  */

import React from 'react';

import LoginForm from './LoginForm';
import Wrapper from './Wrapper';
import Button from 'components/Button';
import StyledLink from 'components/StyledLink';


const Home = () => {
  return (
    <Wrapper>
      <LoginForm />
      <StyledLink to="/register">Register</StyledLink>
    </Wrapper>
  );
};


export default Home;
