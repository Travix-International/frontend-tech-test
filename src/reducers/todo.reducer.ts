import { TodoActions } from './../actions/todo.actions'
import { ITodoList, ITodoReducer } from '../interfaces/interface';

const initialState: ITodoReducer = {
    TodoList: [],
    ShowTodoItem: false,
    TodoItem: {},
    TodoSelection: []
}
var Todo = (state: ITodoReducer = initialState, action) => {
    switch (action.type) {
        case TodoActions.ADD_TODO_ITEM:
            {

                return {
                    ...{}, ...state, ... {
                        Todo: [...state.TodoList, ...[{ ...{}, ...action.payload, ...{ id: new Date().getTime() } }]]
                    }
                }
            }
        case TodoActions.DELETE_TODO_ITEM: {
            return {
                ...TodoActions, ...state, ...{ Todo: state.TodoList.filter((todo) => todo.id !== action.payload) }
            }
        }
        case TodoActions.UPDATE_TODO_ITEM:
            {

                return {
                    ...{}, ...state, ... {
                        Todo: [
                            ...state.TodoList,
                            ...state.TodoList.map((todo) => todo.id === action.payload.id ?
                                { ...{}, ...todo, ...action.payload } :
                                todo)
                        ]
                    }
                }
            }
        case TodoActions.SAVE_TODO_ITEMS: {
            return {...{},...state,...{
                TodoList: action.payload || state.TodoList || []}
            }
        }
        case TodoActions.OPEN_TODO_ITEM: {
            let { description = '', title = '', id = 0 } = action.payload;
            return { ...{}, ...state, ...{ ShowTodoItem: true, TodoItem: { description, title, id } } }
        }
        case TodoActions.CLOSE_TODO_ITEM: {
            return { ...{}, ...state, ...{ ShowTodoItem: false, TodoItem: {} } }
        }
        case TodoActions.UPDATE_TODO_SELECTION: {
            let { TodoSelection } = state;
            TodoSelection = TodoSelection.includes(action.payload) ? TodoSelection.filter((itemId: number) => Number(itemId) !== Number(action.payload)) : [...TodoSelection, ...[action.payload]]
            return {
                ...{}, ...state, ...{ TodoSelection }
            }
        }
        case TodoActions.CLEAR_TODO_SELECTION:{
            return {
                ...{},...state,...{TodoSelection:[]}
            }
        }
        default:
            return state;
    }
}
export default Todo