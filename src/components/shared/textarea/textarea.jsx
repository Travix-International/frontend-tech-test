import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './textarea.css';

class Textarea extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    placeholder: 'Type something',
    value: ''
  }

  onChange = (event) => {
    const { name, value } = event.target;

    this.props.onChange(value, name);
  }

  render() {
    const { name, placeholder, value } = this.props;

    return (
      <textarea
        name={ name }
        placeholder={ placeholder }
        onChange={ this.onChange }
        styleName='textarea'
        value={ value }
      />
    );
  }
}

export default CSSModules(Textarea, styles);