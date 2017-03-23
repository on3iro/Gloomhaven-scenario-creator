/**
  * Renders a Navigation with react-router Links
  *
  * @namespace Navigation
  */

import React from 'react';

import Wrapper from './Wrapper';
import NavBar from './NavBar';
import NavLink from './NavLink';

const Navigation = () => {
  return (
    <Wrapper>
      <NavBar>
        <NavLink to="/">
          Home
        </NavLink>
      </NavBar>
    </Wrapper>
  );
};

export default Navigation;
