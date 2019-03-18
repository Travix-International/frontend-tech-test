import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODO,
  EDIT_TODO
} from "../data/ActionTypes";

let initial = {
  tasks: []
};

const ToDoReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        todoItems: action.todoItems
      };
    case DELETE_TODO:
      let arr = state.todoItems.filter(toDo => {
        return !(toDo.id === action.id);
      });
      return Object.assign({}, state, { todoItems: arr });
    case ADD_TODO:
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            description: action.description,
            title: action.title,
            id: action.id
          }
        ]
      };
    case EDIT_TODO:
      return {
        ...state,
        todoItems: state.todoItems.map(todoItem => {
          return todoItem.id === action.id
            ? {
                ...todoItem,
                description: action.description
              }
            : todoItem;
        })
      };
    default:
      return state;
  }
};

export default ToDoReducer;
