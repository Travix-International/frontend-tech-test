import { handleActions } from 'redux-actions';

import todoListActions from '../actions/todoListActions';

const defaultState = {
  todos: [],
  editingTodoIndex: null
};

const todoListReducer = handleActions({
  [todoListActions.fetchTodosSuccess]: (state, action) => {
    return {
      ...state,
      todos: action.payload.todos
    };
  },
  [todoListActions.addTodoSuccess]: (state, action) => {
    const newTodo = {
      id: action.payload.id,
      title: action.payload.title,
      description: action.payload.description
    };
    return {
      ...state,
      todos: [...state.todos, newTodo]
    };
  },
  [todoListActions.deleteTodoSuccess]: (state, action) => {
    const index = state.todos.findIndex(todo => todo.id === action.payload.id);
    return {
      ...state,
      todos: [
        ...state.todos.slice(0, index),
        ...state.todos.slice(index + 1)
      ]
    };
  },
  [todoListActions.setEditMode]: (state, action) => {
    const todos = state.todos.map(todo =>
      todo.id === action.payload.id
        ? { ...todo, editing: !todo.editing }
        : { ...todo, editing: false }
    );
    return {
      ...state,
      editingTodoIndex: action.payload.id,
      todos: [...todos]
    };
  },
  [todoListActions.toggleTodoSuccess]: (state, action) => {
    const todos = state.todos.map(todo =>
      todo.id === action.payload.id
        ? { ...todo, completed: !todo.completed, editing: false }
        : todo
    );
    return {
      ...state,
      todos: [...todos]
    };
  },
  [todoListActions.updateTodoSuccess]: (state, action) => {
    const todos = state.todos.map(todo =>
      todo.id === action.payload.id
        ? {
          ...todo,
          title: action.payload.title,
          description: action.payload.description
        }
        : todo
    );
    return {
      ...state,
      todos: [...todos]
    };
  }
}, defaultState);

export default todoListReducer;
