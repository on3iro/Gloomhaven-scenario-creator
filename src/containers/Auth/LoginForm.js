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
import Input from 'components/Input';
import Span from 'components/Span';


const validate = values => {
  const errors = {};

  if(!values.email) {
    errors.email = 'Required';
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if(!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div>
      <Input
        {...input}
        placeholder={label}
        type={type}
        error={touched && error}
      />
      {touched && error && <Span error={touched && error}>{error}</Span>}
    </div>
  );
};

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <H1>Login</H1>
      <Field name="email" type="text"
        component={renderField} label="email"
      />
      <Field name="password" type="password"
        component={renderField} label="password"
      />
      <Button submit >Login</Button>
    </form>
  );
}

LoginForm.propTypes = {
  // TODO
};

// Decorate the form component
export default reduxForm({
  form: 'login',
  validate
})(LoginForm);