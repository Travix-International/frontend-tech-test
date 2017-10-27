import React, { PropTypes } from "react";
import { FormGroup, FormControl, HelpBlock, Row, Col } from "react-bootstrap";

// the field content
function content(theme, label, input, componentClass, type, placeholder, children) {
  if ('other_theme' === theme) {
    // layout for some other theme
  } else {
    // default theme: 2col
    return (
      <Row>
        <Col xsOffset={1} sm={1}>{label}</Col>
        <Col sm={9}>{field(input, componentClass, type, placeholder, children)}</Col>
      </Row>
    );
  }
}

// the field itself
function field(input, componentClass, type, placeholder, children) {
  return (
    <FormControl {...input} componentClass={componentClass} type={type} placeholder={placeholder}>
      {children}
    </FormControl>
  );
}

// Form field component
const FormField = ({className, doValidate, meta, input, componentClass, type, placeholder, children, theme, label}) => {
    if (doValidate) {
      return (
        <FormGroup className={className}
          validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
          {content(theme, label, input, componentClass, type, placeholder, children)}
          <FormControl.Feedback/>
          <HelpBlock>
            {meta.touched && meta.error ? meta.error : null}
          </HelpBlock>
        </FormGroup>
      );
    } else {
      return (
        <FormGroup className={className}>
          {content(theme, label, input, componentClass, type, placeholder, children)}
        </FormGroup>
      );
  }
}

// prop checks
FormField.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  theme: PropTypes.string,  // 2col (default), etc
  doValidate: PropTypes.bool, // true or false
  label: PropTypes.any,  // the field text or a react component if we have html inside (empty string by default)
  componentClass: PropTypes.string, // input (by default), textarea, select
  type: PropTypes.string,   // input type: text (by default), password
  placeholder: PropTypes.string,    // input placeholder (empty string by default)
  className: PropTypes.string,  // the class name (empty string by default)
}

export default FormField;