import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input } from 'travix-ui-kit';


import css from './style.scss';

const propTypes = {
  addTodo: PropTypes.func.isRequired
};

class Form extends Component {
  state = { value: '' }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (e) => {
    this.props.addTodo(this.state.value);
    this.setState({ value: '' });
    e.preventDefault();
  }

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <Input value={this.state.value} onChange={this.handleChange}/>
      </form>
    );
  }
}

Form.propTypes = propTypes;

export default Form;
