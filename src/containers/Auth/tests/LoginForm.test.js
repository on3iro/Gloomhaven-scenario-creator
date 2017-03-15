import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';

import { LoginForm } from '../LoginForm';
import H1 from 'components/H1';
import Button from 'components/Button';


const renderComponent = newProps => {
  const props = {
    ...newProps,
    handleSubmit: jest.fn(),
  };

  const renderedWrapper = shallow(<LoginForm {...props} />);

  return {
    props,
    renderedWrapper,
  };
};

describe('<LoginForm />', () => {
  it('should render <form> tag', () => {
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

  it('should render text Field', () => {
    const { renderedWrapper } = renderComponent();
    expect(renderedWrapper.find(Field).findWhere(n => n.props().type === 'text').exists())
      .toMatchSnapshot();
  });

  it('should render Password Field', () => {
    const { renderedWrapper } = renderComponent();
    expect(renderedWrapper.find(Field).findWhere(n => n.props().type === 'password').exists())
      .toMatchSnapshot();
  });

  it('should render submit button ', () => {
    const { renderedWrapper } = renderComponent();
    expect(renderedWrapper.find(Button).findWhere(n => n.props().submit === true).length).toMatchSnapshot();
  });
});
