import React from 'react';
import { PropTypes as T } from 'prop-types';
import { withFormsy } from 'formsy-react';

const propTypes = {
  disabled: T.bool,
  name: T.string.isRequired,
  label: T.string,
  inputClass: T.string,
  isPristine: T.func,
  getErrorMessage: T.func,
  getValue: T.func,
  setValue: T.func,
  showRequired: T.func,
};

/**
 * Abstract input component in order to abtract formsy component
 * formsy allow us to separate concerns from UI validations from
 * bussiness related containers
 */
export class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(event) {
    this.props.setValue(event.currentTarget.value);
  }

  onBlur(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const errorClass = (
      !this.props.isPristine() &&
      (this.props.getErrorMessage() ||
      this.props.showRequired()) ? 'border-danger' : ''
    );

    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          className={`${this.props.inputClass} ${errorClass}`}
          disabled={this.props.disabled}
          name={this.props.name}
          onBlur={this.onBlur}
          onChange={this.onChange}
          type="text"
          value={this.props.getValue()}
        />
      </div>
    );
  }
}

InputComponent.propTypes = propTypes;
export default withFormsy(InputComponent);
