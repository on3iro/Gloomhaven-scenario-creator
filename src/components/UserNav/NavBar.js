/**
  * Renders a container NavBar for the Navigation
  *
  * @namespace Navigation.NavBar
  * @memberOf Navigation
  */

import styled from 'styled-components';


export default styled.ul`
  float: right;
  display: inline-block;
  padding: 0;
  margin: 0 0 0 40px;
  height: 100%;
  text-align: center;
  list-style-type: none;

  &::before,
  &::after {
    content: '';
    clear: both;
  }
`;
