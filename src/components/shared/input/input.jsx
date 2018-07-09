import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './input.css';

class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onEnter: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string
  }

  static defaultProps = {
    placeholder: 'Type something',
    value: '',
    type: 'text'
  }

  onChange = (event) => {
    const { name, value } = event.target;

    this.props.onChange(value, name);
  }

  onEnter = (event) => {
    if (!this.props.onEnter) return;

    const { which } = event;

    if (which !== 13) return;

    this.props.onEnter();
  }

  render() {
    const { name, placeholder, type, value } = this.props;

    return (
      <input
        name={ name }
        placeholder={ placeholder }
        onChange={ this.onChange }
        onKeyDown={ this.onEnter }
        styleName='input'
        type={ type }
        value={ value }
      />
    );
  }
}

export default CSSModules(Input, styles);