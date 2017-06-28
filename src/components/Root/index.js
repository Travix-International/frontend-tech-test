import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observe, streamProps } from 'frint-react';

import {
  getTodosAsync as getTodos,
  createTodoAsync as createTodo,
} from 'actions/todos';

import Form from '../Form';
import style from './style.scss';

class Root extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
    createTodo: PropTypes.func.isRequired,
    // decrementCounter: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div className={style.wrapper}>
        <h2 className={style.title}>Todo App</h2>

        <ul>
          { this.props.todos.map(l => (
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

        <Form createTodo={this.props.createTodo} />
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
