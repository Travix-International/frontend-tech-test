import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo, isEditing } from '../../actions/apiActions';
import './List.scss';
import Row from './Row';
import PropTypes from 'prop-types';
import {animation} from '../../custom';

class List extends Component {
  constructor(props){
    super(props);

    this.deleteHandle = this.deleteHandle.bind(this);
    this.editHandle = this.editHandle.bind(this);
  }

  componentWillMount() {
    this.props.fetchTodos();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTodo !== this.props.newTodo) {
      this.props.todos.push(nextProps.newTodo);
      console.log('pushed');
      animation();
    }
    if (nextProps.deletedTodo !== this.props.deletedTodo) {
      const arr = this.props.todos;
      arr.forEach(function(item, index) {
        if (item.id === nextProps.deletedTodo.id) {
          arr.splice(index, 1);
        }
      });
    }
  }

  deleteHandle(id) {
    this.props.deleteTodo(id);
  }

  editHandle(id) {
    this.props.isEditing(id);
  }

  render() {

    return(
      <div  className="List">
        {this.props.todos.length > 0 ? (
          <Row todos={this.props.todos} onDelete={this.deleteHandle} onEdit={this.editHandle} />
        ) : (
          <p className="cover">Add Todos to the list using form on the left</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.api.todos.tasks,
  newTodo: state.api.todo.task,
  deletedTodo: state.api.deletedTodo.task,
  updatedTodo: state.api.updatedTodo.task,
  edited: state.api.isEditing
})

List.propTypes = {
  todos: PropTypes.array,
  newTodo: PropTypes.object,
  deletedTodo: PropTypes.object,
  updatedTodo: PropTypes.object,
  edited: PropTypes.bool
}

export default connect(mapStateToProps, { fetchTodos, deleteTodo, isEditing })(List);
