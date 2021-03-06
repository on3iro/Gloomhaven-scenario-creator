/**
  * Renders a basic LoginForm
  *
  * @namespace HomePage.LoginForm
  * @memberOf HomePage
  */

import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import H1 from 'components/H1';
import Button from 'components/Button';

import RenderField from './RenderField';


export const validate = values => {
  const errors = {};
  const REQUIRED = 'Required';

  if(!values.email) {
    errors.email = REQUIRED;
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if(!values.password) {
    errors.password = REQUIRED;
  }

  return errors;
};

export const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <H1>Login</H1>
      <Field name="email" type="text"
        component={RenderField} label="email"
      />
      <Field name="password" type="password"
        component={RenderField} label="password"
      />
      <Button submit >Login</Button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

// Decorate the form component
export default reduxForm({
  form: 'login',
  validate
})(LoginForm);
