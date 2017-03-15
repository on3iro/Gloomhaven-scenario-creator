import React from 'react';
import { shallow } from 'enzyme';

import H1 from 'components/H1';
import Button from 'components/Button';
import { Field } from 'redux-form';
import { RegisterForm } from '../RegisterForm';


const renderComponent = newProps => {
  const props = {
    handleSubmit: jest.fn(),
  };

  const renderedWrapper = shallow(<RegisterForm {...props} />);

  return {
    props,
    renderedWrapper,
  };
};

describe('<RegisterForm />', () => {
  it('should render <form>', () => {
    const { renderedWrapper } = renderComponent();
    expect(renderedWrapper.find('form').length).toMatchSnapshot();
  });

  it('should render <H1>', () => {
    const { renderedWrapper } = renderComponent();
    expect(renderedWrapper.find(H1).length).toMatchSnapshot();
  });

  it('should render Fields', () => {
    const { renderedWrapper } = renderComponent();
    expect(renderedWrapper.find(Field).length).toMatchSnapshot();
  });

  it('Should render <Button />', () => {
    const { renderedWrapper } = renderComponent();
    expect(renderedWrapper.find(Button).length).toMatchSnapshot();
  });
});
