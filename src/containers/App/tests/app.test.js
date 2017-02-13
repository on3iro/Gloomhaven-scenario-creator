import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';
import Navigation from 'components/Navigation';


describe('App', () => {
  it('Should render self and subcomponents', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').exists()).toEqual(true);
    expect(wrapper.find(Navigation).exists()).toEqual(true);
  });
});
