import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import StyledInput from './StyledInput';
import Wrapper from './Wrapper';
import Label from './Label';
import LabelContent from './LabelContent';

class Input extends PureComponent {
  state = {
    isFocused: false,
    isFilled: !!this.props.value
  };

  componentWillReceiveProps({ value }) {
    if (value !== this.props.value) {
      if (value && !this.state.isFilled) {
        this.setState({
          isFilled: true
        });
      }

      if (!value && this.state.isFilled) {
        this.setState({
          isFilled: false
        });
      }
    }
  }

  handleChange = (value, name) => {
    const { onChange } = this.props;

    this.setState({
      isFilled: value.length
    });

    if (onChange) onChange(value, name);
  }

  handleFocus = () => {
    this.setState({
      isFocused: true
    });
  }

  handleBlur = () => {
    this.setState({
      isFocused: false
    });
  }

  render() {
    const { isFocused, isFilled } = this.state;
    const { value, name, type, placeholder } = this.props;
    const focused = isFocused || isFilled;

    return (
      <Wrapper>
        <StyledInput name={name} value={value} type={type} onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} autocomplete="off" />
        <Label focused={focused}>
          <LabelContent focused={focused}>{placeholder}</LabelContent>
        </Label>
      </Wrapper>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
