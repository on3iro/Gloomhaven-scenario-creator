import React from 'react';

import Input from 'components/Input';
import Span from 'components/Span';


const RenderField = ({ input, label, type, meta: { touched, error } }) => {
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

export default RenderField;
