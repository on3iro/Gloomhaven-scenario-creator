import React from 'react';
import { render, shallow } from 'enzyme';
import { Link, MemoryRouter } from 'react-router';

import NavLink from '../NavLink';
import { RestyledLink } from '../NavLink'
import { Li } from '../NavLink';


const renderWrapper = newProps => {
  const props = {
    ...newProps,
    to: '/',
  };

  const renderedWrapper = render(
    <MemoryRouter>
      <NavLink {...props}>Home</NavLink>
    </MemoryRouter>
  );

  return {
    props,
    renderedWrapper,
  };
};

describe('<NavLink />', () => {
  it('Should render react-router Link', () => {
    const { renderedWrapper } = renderWrapper();
    expect(renderedWrapper.find(Link).length).toMatchSnapshot();
  });

  it('should render styled.li', () => {
    const renderedWrapper = shallow(<NavLink to="/">Home</NavLink>);
    expect(renderedWrapper.find(Li).length).toMatchSnapshot();
  });

  it('should render <RestyledLink />', () => {
    const renderedWrapper = shallow(<NavLink to="/">Home</NavLink>);
    expect(renderedWrapper.find(RestyledLink).length).toMatchSnapshot();
  });
});
