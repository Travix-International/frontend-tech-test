/* eslint-disable react/jsx-boolean-value */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

const propTypes = {
  createTodo: PropTypes.func.isRequired
};

class Form extends Component {
  state = { value: '' }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    this.props.createTodo(this.state.value);
    this.setState({ value: '' });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          autoFocus={true}
          className={style.input}
          onChange={this.handleChange}
          placeholder={'Add a new todo'}
          type="text"
          value={this.state.value}
        />
      </form>
    );
  }
}

Form.propTypes = propTypes;

export default Form;
