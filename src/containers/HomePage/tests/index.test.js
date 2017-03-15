import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import Wrapper from '../Wrapper';


describe('<HomePage />', () => {
  it('should render Wrapper', () => {
    const renderedWrapper = shallow(<HomePage />);
    expect(renderedWrapper.find(Wrapper).length).toMatchSnapshot();
  });

  it('should render h1', () => {
    const renderedWrapper = shallow(<HomePage />);
    expect(renderedWrapper.find('h1').length).toMatchSnapshot();
  });
});
