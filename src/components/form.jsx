import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './form.css';

class Form extends PureComponent {
  state = {
    title: this.props.title || '',
    description: this.props.description || ''
  };

  static propTypes = {
    addTodo: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string
  }

  submit = (e) => {
    e.preventDefault();

    const { addTodo } = this.props;
    const { title, description } = this.state;

    addTodo({
      title,
      description
    });
  }

  onChangeValue = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    const { submit, onChangeValue } = this;
    const { title, description } = this.state;

    return (
      <form
        styleName='form'
        onSubmit={ submit }
        autoComplete='off'
      >
        <input
          styleName='input'
          type='text'
          name='title'
          placeholder='todo title'
          onChange={ onChangeValue }
          defaultValue={ title }
        />
        <textarea
          styleName='textarea'
          name='description'
          placeholder='todo description'
          onChange={ onChangeValue }
          defaultValue={ description }
        ></textarea>
      </form>
    );
  }
}

export default CSSModules(Form, styles);