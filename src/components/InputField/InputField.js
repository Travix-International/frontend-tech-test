import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function InputField(props) {
  const {
    input,
    label,
    meta: {
      error,
      touched,
      valid
    }
  } = props;
  
  return (
    <div
      className={
        classnames([
          'form-group',
          {
            'has-error': touched && !valid
          }
        ])
      }
    >
      <div className={"label-container"}>
        <label>{props.label}</label>
      </div>
      <div className={"input-container"}>
        <input
          {...input}
          type={"text"}
        />
        {
          error && touched && !valid
          && <div className={"error-message"}><label>{error}</label></div>
        }
      </div>
    </div>
  );
}

InputField.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  }).isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
    valid: PropTypes.bool
  })
};
InputField.defaultProps = {
  label: '',
  meta: {
    error: '',
    touched: false,
    valid: true
  }
};
