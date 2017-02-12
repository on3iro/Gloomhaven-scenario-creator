import React from 'react';
import { shallow } from 'enzyme';

import Home from '../';
import { Title } from '../';

describe('Home', () => {
  it('Should render self and subcomponents', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.contains(<Title>This is Home!</Title>)).toEqual(true);
  });
});
