import arrayMove from 'array-move';
import {
  FETCH_ALL_TODO_SUCCESS,
  INSERT_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  ON_BATCH_TODO_UPDATE_SUCCESS,
  GET_ALL_TODO,
  GET_NAV_FILTERS,
  GET_NAV_LABELS,
  GET_STARRED_TODO,
  GET_UNSELECTED_ALL_TODO,
  GET_UNSTARRED_TODO,
  HANDLE_REQUEST_CLOSE,
  ON_HIDE_LOADER,
  ON_LABEL_MENU_ITEM_SELECT,
  ON_LABEL_SELECT,
  ON_LABEL_UPDATE,
  ON_OPTION_MENU_ITEM_SELECT,
  ON_OPTION_MENU_SELECT,
  ON_SORTEND,
  ON_TODO_ADD,
  ON_TODO_CHECKED,
  SELECTED_TODO_SUCCESS,
  ON_TOGGLE_DRAWER,
  SEARCH_TODO,
  SELECT_ALL_TODO,
  SET_CURRENT_TODO_NULL,
  SHOW_MESSAGE,
  SHOW_TODOS,
  UPDATE_SEARCH,
  ON_TODO_UPDATE_SUCCESS
} from 'constants/ActionTypes'

const INIT_STATE = {
  searchTodo: '',
  alertMessage: '',
  loader: true,
  showMessage: false,
  optionName: 'None',
  drawerState: false,
  allToDos: [],
  currentTodo: null,
  selectedToDos: 0,
  labelMenuState: false,
  optionMenuState: false,
  toDos: [],
  filter: -1
};


export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ON_SORTEND: {
      return {
        ...state, toDos: arrayMove(state.toDos, action.payload.oldIndex, action.payload.newIndex)
      }
    }
    case ON_LABEL_SELECT: {
      return {
        ...state,
        labelMenuState: !state.labelMenuState
      }
    }
    case ON_OPTION_MENU_SELECT: {
      return {
        ...state,
        optionMenuState: !state.optionMenuState
      }
    }
    case ON_OPTION_MENU_ITEM_SELECT: {
      return {...state}
    }
    case SELECT_ALL_TODO: {
      let toDos = state.allToDos.map((todo) => todo ? {
        ...todo,
        selected: true
      } : todo);

      return {
        ...state,
        selectedToDos: toDos.length,
        allToDos: toDos,
        optionName: 'All',
        toDos: toDos
      }
    }
    case GET_ALL_TODO: {
      return {
        ...state,
        currentTodo: null,
        toDos: state.allToDos
      }
    }
    case GET_UNSELECTED_ALL_TODO: {

      let toDos = state.allToDos.map((todo) => todo ? {
        ...todo,
        selected: false
      } : todo);
      return {
        ...state,
        selectedToDos: 0,
        allToDos: toDos,
        optionName: 'None',
        toDos: toDos
      }
    }
    case GET_STARRED_TODO: {
      let selectedToDos = 0;
      let toDos = state.allToDos.map((todo) => {
        if (todo.starred) {
          selectedToDos++;
          return {...todo, selected: true};
        }
        return {...todo, selected: false}
      });
      return {
        ...state,
        selectedToDos: selectedToDos,
        allToDos: toDos,
        optionName: 'Stared',
        toDos: toDos.filter(todo => !todo.deleted)
      }
    }
    case GET_UNSTARRED_TODO: {
      let selectedToDos = 0;
      let toDos = state.allToDos.map((todo) => {
        if (!todo.starred) {
          selectedToDos++;
          return {...todo, selected: true};
        }
        return {...todo, selected: false}
      });
      return {
        ...state,
        selectedToDos: selectedToDos,
        allToDos: toDos,
        optionName: 'UnStarred',
        toDos: toDos.filter(todo => !todo.deleted)
      }
    }
  

    case ON_LABEL_MENU_ITEM_SELECT: {
      const toDos = state.allToDos.map(todo => {
          if (todo.selected) {
            if (todo.labels.includes(action.payload.id)) {
              todo.labels.splice(todo.labels.indexOf(action.payload.id), 1);
              return {...todo, labels: todo.labels};
            } else {
              return {...todo, labels: todo.labels.concat(action.payload.id)};
            }
          } else {
            return todo;
          }
        }
      );
      return {
        ...state,
        alertMessage: 'Label Updated Successfully',
        showMessage: true,
        allToDos: toDos,
        toDos: toDos
      }
    }
    case ON_LABEL_UPDATE: {
      if (action.payload.data.labels.includes(action.payload.label.id)) {
        action.payload.data.labels.splice(action.payload.data.labels.indexOf(action.payload.label.id), 1);
      } else {
        action.payload.data.labels = action.payload.data.labels.concat(action.payload.label.id);
      }
      const toDos = state.allToDos.map(todo => {
          if (todo.id === action.payload.data.id) {
            return action.payload.data;
          } else {
            return todo;
          }
        }
      );

      return {
        ...state,
        alertMessage: 'Label Updated Successfully',
        showMessage: true,
        currentTodo: action.payload,
        allToDos: toDos,
        toDos: toDos,
      }
    }

    case ON_TODO_UPDATE_SUCCESS: {
      const toDos = state.allToDos.map(todo => {
        if (todo.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return todo;
        }
      });
      return {
        ...state,
        alertMessage: action.payload.message,
        showMessage: true,
        currentTodo: action.payload,
        allToDos: toDos,
        toDos: toDos,
      }
    }
    case ON_BATCH_TODO_UPDATE_SUCCESS: {
      const toDos = state.allToDos.map(todo => {
        for(var i = 0; i < action.payload.data.length; i++) {
          if (todo.id === action.payload.data[i].id) {
            return action.payload.data[i];
          }
      }
      return todo;
    });
      return {
        ...state,
        alertMessage: "Updated Successfully",
        showMessage: true,
        currentTodo: state.selectedToDos.length > 0 || state.currentTodo == null ? null : action.payload.data[0],
        allToDos: toDos,
        toDos: toDos,
      }
    }
    case DELETE_TODO_SUCCESS: {
      let selectedToDos = 0;
      const toDos = state.allToDos.map(todo => {
          if (todo.selected) {
            selectedToDos++
          }
          if (action.payload.id === todo.id) {
            if (todo.selected) {
              selectedToDos--
            }
            return {...todo, deleted: true};
          } else {
            return todo;
          }
        }
      );
      
      return {
        ...state,
        alertMessage: action.payload.message,
        showMessage: true,
        allToDos: toDos.filter((todo) => !todo.deleted),
        currentTodo: null,
        selectedToDos: selectedToDos,
        toDos: toDos.filter((todo) => !todo.deleted),
        loader: false,
      }
    }

    case GET_NAV_LABELS: {
      const filterMails = state.allToDos.filter(todo => todo.labels.includes(action.payload.id));
      return {
        ...state,
        currentTodo: null,
        toDos: filterMails
      }
    }
    case GET_NAV_FILTERS: {
      const filterTodos = state.allToDos.filter(todo => 
        (action.payload.id === 0 && todo.starred) ||
        (action.payload.id === 1 && !todo.completed) ||
        (action.payload.id === 2 && todo.completed))
      return {
        ...state,
        currentTodo: null,
        filter: action.payload.id,
        toDos: filterTodos
      }
    }

    case SEARCH_TODO: {
      if (action.payload === '') {
        return {...state, toDos: state.allToDos.filter((todo) => !todo.deleted)};
      } else {
        const searchToDos = state.allToDos.filter((todo) =>
          !todo.deleted && todo.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1);
        return {...state, toDos: searchToDos}
      }
    }
    case SHOW_TODOS: {
      return {...state}
    }
    case ON_TODO_CHECKED: {
      action.payload.selected = !action.payload.selected;
      let selectedToDos = 0;
      const toDos = state.toDos.map(todo => {
          if (todo.selected) {
            selectedToDos++;
          }
          if (todo.id === action.payload.id) {
            if (todo.selected) {
              selectedToDos++;
            }
            return action.payload;
          } else {
            return todo;
          }
        }
      );
      return {
        ...state,
        selectedToDos: selectedToDos,
        toDos: toDos
      }
    }
    case ON_TODO_ADD: {
      return {
        ...state,
        alertMessage: 'ToDo Added Successfully',
        showMessage: true,
        toDos: state.allToDos.concat(action.payload),
        allToDos: state.allToDos.concat(action.payload)
      }
    }
    case SELECTED_TODO_SUCCESS: {
    
      return {
        ...state,
        currentTodo: action.payload.task,
        loader: false
      }
    }
    case SET_CURRENT_TODO_NULL: {
      return {...state, currentTodo: null}
    }
    case UPDATE_SEARCH: {
      return {...state, searchTodo: action.payload}
    }
    case ON_TOGGLE_DRAWER: {
      return {...state, drawerState: !state.drawerState}
    }
    case HANDLE_REQUEST_CLOSE: {
      return {...state, showMessage: false, addTodo: false, labelMenuState: false, optionMenuState: false}
    }
    case ON_HIDE_LOADER: {
      return {...state, loader: false}
    }
    case FETCH_ALL_TODO_SUCCESS: {
      return {
        ...state,
        allToDos: action.payload,
        toDos: action.payload,
        loader: false,
      }
    }
    case INSERT_TODO_SUCCESS: {
      return {
        ...state,
        alertMessage: action.payload.message,
        showMessage: true,
        allToDos: state.allToDos.concat(action.payload.data),
        toDos: state.allToDos.concat(action.payload.data),
        loader: false,
      }
    }
    
    case SHOW_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload,
        showMessage: true,
        loader: false
      }
    }

    default:
      return state;
  }
}