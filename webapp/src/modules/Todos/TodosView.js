import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as todoActions } from '../../redux/modules/todos';
import TodosList from './TodosList';
import '../../styles/todos.scss';

class TodosView extends Component {
  static propTypes = {
    todoActions: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    todoIds: PropTypes.array.isRequired,
    todos: PropTypes.object.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.todoActions.listTodos();
  }

  createTodo = () => {
    const title = this.title.value;
    const description = this.description.value;
    const { isLoading } = this.props;

    if(title.length && description.length && !isLoading) {
      this.props.todoActions.createTodo(title, description);
      this.title.value = '';
      this.description.value = '';
      this.title.focus();
    }
  }

  enterTodo = (e) => {
    if (e.key === 'Enter') {
      this.createTodo();
    }
  }

  setRef = (ref) => (elm) => {
    this[ref] = elm;
  }

  render() {
    const { isLoading, todoIds, todoActions, error } = this.props;
    const todos = todoIds.map((id) => this.props.todos[id]);

    return (
      <div className={`todo-view ${isLoading ? 'loading' : ''}`}>
        <h1>Travix test by Andrew4d3</h1>
        <div className="todo-create input-group">
          <input className="form-control" type='text' placeholder="Enter Title" ref={this.setRef('title')} onKeyPress={this.enterTodo} />
          <input className="form-control" type='text' placeholder="Enter Description" ref={this.setRef('description')} onKeyPress={this.enterTodo} />
          <button className='btn btn-primary' onClick={this.createTodo} disabled={isLoading}>Create Task</button>
          {
            error
            ? <div className='error-message alert alert-danger'>{error.message || 'Error Found'}</div>
            : null
          }
        </div>
        {isLoading
          ? <div className='loading-message'>Loading...</div>
          : null
        }
        <TodosList todos={todos} todoActions={todoActions} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  todoActions: bindActionCreators(todoActions, dispatch)
});

const mapStateToProps = (state) => ({
  isLoading: state.todos.isLoading,
  todoIds: state.todos.todoIds,
  todos: state.todos.todos,
  error: state.todos.error
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
