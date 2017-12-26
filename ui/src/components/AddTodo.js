import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './AddTodo.css';

class AddTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            className="input"
            onChange={this.handleChange}
            placeholder="Have you any new task?"
            type="text"
            value={this.state.value}
          />
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddTodo;
