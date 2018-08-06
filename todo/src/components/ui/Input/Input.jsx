import React, { Fragment } from 'react';

const Input = props => {
  const { area } = props;
  const inputField = area ? <textarea {...props} /> : <input {...props} />;
  return (
    <Fragment>
      {inputField}
    </Fragment>
  );
};
export default Input;