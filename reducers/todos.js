import {
  TODO_ADD,
  TODO_DELETE,
  TODO_FETCH,
  TODO_UPDATE,
} from '../constants';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...state,
        {
          title: action.title,
          description: action.description,
          id: action.id,
        },
      ];

    case TODO_DELETE:
      return state.filter(todo => todo.id !== action.id);

    case TODO_FETCH:
      return action.todoList;

    case TODO_UPDATE:
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }

        todo.title = action.title;
        todo.description = action.description;

        return todo;
      });

    default:
      return state;
  }
}
