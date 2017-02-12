import React from 'react';
import styled from 'styled-components';


export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Home = () => {
  /**
    * 'Home' page of the application.
    *
    * @function Home
    * @returns h1
    */

  return (
    <Title>This is Home!</Title>
  );
};


export default Home;
