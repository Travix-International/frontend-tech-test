
import {
  TODOS_ADD,
  TODOS_DELETE,
  TODOS_UPDATE,
  TODOS_FETCH,
  TODOS_FAILED
} from '../constants';

const INITIAL_STATE = {
  records: [],
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TODOS_ADD:
      return Object.assign({}, {
        records: [
          ...state.records,
          {
            id: action.id,
            title: action.title,
            description: action.description
          }
        ]
      });

    case TODOS_DELETE:
      return Object.assign({}, {
        records: state.records.filter(todo => todo.id != action.id),
      });

    case TODOS_UPDATE:
      return Object.assign({}, {
        records: state.records
          .map((todo) => {
            if (todo.id !== action.id) {
              return todo;
            }

            todo.title = action.title;
            todo.description = action.description;

            return todo;
          })
      });

    case TODOS_FETCH:
      return Object.assign({}, {
        records: action.response
      });

    case TODOS_FAILED:
    default:
      return state;
  }
}
