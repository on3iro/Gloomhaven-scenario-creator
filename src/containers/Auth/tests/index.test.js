import React from 'react';
import { shallow } from 'enzyme';

import Auth from '../index';
import Wrapper from '../Wrapper';
import LoginForm from '../LoginForm';


describe('<Auth />', () => {
  it('should render Wrapper', () => {
    const wrapper = shallow(<Auth />);
    expect(wrapper.find(Wrapper).length).toEqual(1);
  });

  it('should render <LoginForm/>', () => {
    const wrapper = shallow(<Auth />);
    expect(wrapper.find(LoginForm).length).toEqual(1);
  });
});
