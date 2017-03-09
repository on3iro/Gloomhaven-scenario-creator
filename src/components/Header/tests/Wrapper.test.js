import  React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';


describe('<Wrapper />', () => {
  it('Should render div', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
