/**
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route.
 * Otherwise it'll render a link with an onclick.
 *
 * @namespace Button
  */

import React, { PropTypes, Children } from 'react';

import A from './A';
import StyledButton from './StyledButton';
import StyledSubmit from './StyledSubmit';
import Wrapper from './Wrapper';


const Button = props => {
  // Render an anchor tag
  let button = (
    <A href={props.href} onClick={props.onClick} {...props} >
      {Children.toArray(props.children)}
    </A>
  );

  // If the button has a handleRoute prop, we want to render a button
  if(props.handleRoute) {
    button = (
      <StyledButton onClick={props.handleRoute} {...props} >
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  // If the button has submit prop render input
  if(props.submit) {
    button = (
      <StyledSubmit {...props} />
    );
  }

  return (
    <Wrapper>
      {button}
    </Wrapper>
  );
};

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  submit: PropTypes.bool,
};

export default Button;
