import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {animation} from '../../../custom';


class Row extends Component {
  runDelete(index, id) {
      this.props.onDelete(id);
  }

  runEdit(id) {
    this.props.onEdit(id);
  }

  componentDidMount() {
    animation();
  }

  render() {
    return(
      this.props.todos.map((todo, index) => (
      <div key={index} className="todo">
        <h2>{todo.title}</h2>
        <p className="dscr">{todo.description}</p>
        <div className="button-box"><button className="btn btn-primary" onClick={() => {this.runEdit(todo.id)}}>Edit</button>
        <button className="btn btn-danger" onClick={() => {this.runDelete(index, todo.id)}}>Delete</button></div>
      </div>
      ))
    )
  }
}

Row.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default Row;
