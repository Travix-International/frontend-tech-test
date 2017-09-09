import _ from 'lodash';

import {
  TODOS_ADD,
  TODOS_DELETE,
  TODOS_UPDATE,
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
            ...action.payload,
            id: state.records.length,
          }
        ]
      });

    case TODOS_DELETE:
      return Object.assign({}, {
        records: state.records.filter(todo => todo.id !== action.id),
      });

    case TODOS_UPDATE:
      return Object.assign({}, {
        records: state.records
          .map((todo) => {
            if (todo.id !== action.payload.id) {
              return todo;
            }

            return { ...todo, ...action.payload };
          })
      });

    default:
      return state;
  }
}
