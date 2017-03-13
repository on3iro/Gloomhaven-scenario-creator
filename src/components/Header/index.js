/**
  * Renders a Header with a Logo and a navigation
  *
  * @namespace Header
  */

import  React from 'react';

import Navigation from 'components/Navigation';
import UserNav from 'components/Auth/UserNav';
import A from './A';
import Wrapper from './Wrapper';


export const Header = props => {
  return (
    <Wrapper>
      <A href="#">
        Logo
      </A>
      <Navigation />
      <UserNav {...props} />
    </Wrapper>
  );
};

export default Header;
