import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observe, streamProps } from 'frint-react';

import {
  getTodosAsync as getTodos,
  createTodoAsync as createTodo,
} from 'actions/todos';

import style from './style.scss';

class Root extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
    createTodo: PropTypes.func.isRequired,
    // decrementCounter: PropTypes.func.isRequired
  }

  state = { value: '' }

  componentWillMount() {
    this.props.getTodos();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    this.props.createTodo(this.state.value);
    event.preventDefault();
  }

  render() {
    const { todos } = this.props;
    return (
      <div className={style.body}>
        <h2>Todo App</h2>

        <ul>
          { todos.map(l => (
            <li key={l.id}>
              <button>
                [ ] 
              </button>
              <span>{ l.title }</span>
              <button>
                x
              </button>
            </li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder={'Add a new todo'}
            type="text"
            value={this.state.value}
          />
          <button type={'submit'}>Check</button>
        </form>
      </div>
    );
  }
}

export default observe(app => (
  streamProps({})
    .set(
      app.get('store').getState$(),
      state => ({ todos: state.todos.list })
    )
    .setDispatch({
      getTodos,
      createTodo
    }, app.get('store'))
    .get$()
))(Root);
