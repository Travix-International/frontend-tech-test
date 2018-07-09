import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Button from 'react-toolbox/lib/button';

import Input from '../input/input.jsx';

import styles from './delayedinput.css';

class DelayedInput extends Component {
  static propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string
  }

  static defaultProps = {
    label: '',
    icon: '',
    type: 'text'
  }

  state = {
    active: false,
    value: ''
  }

  onChange = (value) => {
    this.setState({ value });
  }

  onEnter = () => {
    const { onChange, name } = this.props;
    const { value } = this.state;
    
    onChange(value, name);
    this.setState({ value: '' });
  }

  setActive = () => {
    this.setState((state) => ({ active: !state.active }));
  }

  render() {
    const { active, value } = this.state;
    const { icon, label, name, placeholder, type } = this.props;
    const handleClick = active ? this.onEnter : this.setActive;

    return (
      <div styleName='delayed-input'>
        {active
          ? <Input
            name={ name }
            placeholder={ placeholder }
            onChange={ this.onChange }
            onEnter={ this.onEnter }
            type={ type }
            value={ value }
          />
          : null}
        <Button
          label={ label }
          icon={ icon }
          onClick={ handleClick }
        />
      </div>
    );
  }
}

export default CSSModules(DelayedInput, styles);