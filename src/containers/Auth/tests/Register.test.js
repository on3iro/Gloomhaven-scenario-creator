import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';
import { Register } from '../Register';
import RegisterForm from '../RegisterForm';


const renderWrapper = newProps => {
  const props = {
    registerSubmit: () => {},
    location: {
      state: 'test'
    },
    isLoggedIn: false,
    ...newProps,
  };

  const renderedWrapper = shallow(<Register {...props} />);

  return {
    props,
    renderedWrapper,
  };
}

describe('<Register />', () => {
  it('should render <Wrapper />', () => {
    const { renderedWrapper } = renderWrapper();
    expect(renderedWrapper.find(Wrapper).length).toEqual(1);
  });

  it('should render <RegisterForm />', () => {
    const { renderedWrapper } = renderWrapper();
    expect(renderedWrapper.find(RegisterForm).length).toEqual(1);
  });
});
