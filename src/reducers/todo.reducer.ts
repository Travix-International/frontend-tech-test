import { TodoActions } from './../actions/todo.actions'

export interface ITodoItem {
    name: string;
    endTime: number;
    assignee: string;
    isDone: boolean;
    isExpired: boolean;
    id: number
}

export type ITodoList = Array<ITodoItem>

const initialState: { TodoList: ITodoList } = {
    TodoList: []
}
export var Todo = (state = initialState, action) => {
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
        default:
            return state;
    }
}