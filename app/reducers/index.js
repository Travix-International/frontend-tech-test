import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'

export const FILTERS = {
    FILTER_BY: 'FILTER_BY',
    TOGGLE_TODO: 'TOGGLE_TODO'
};

export const TODO_ACTIONS = {
    ADD_TODO: 'ADD_TODO'
};
export const FETCH = {
    'GET_TASKS': 'GET_TASKS'
};


export function todoReducer(state = {
    visibilityFilter: false,
    fetchingFailed: false,
    fetchDataSuccess: false,
    isLoading: false,
    todos: []
}, action) {

    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO: {
            let newState = Object.assign({}, state);

            const newTodos = [...newState.todos, {...action.payload, completed: false}];
            newState.todos = newTodos;

            return newState;
        }

       //TODO
        case FILTERS.TOGGLE_TODO:
            let newState = Object.assign({}, state);

            // const newTodos = newState.todos.map(todo =>
            //     (todo.id === action.payload)
            //         ? {...todo, completed: !todo.completed}
            //         : todo
            // );

            let idx = newState.todos.findIndex(todo => todo.id === action.payload);
            const newTodo = {...newState.todos[idx], completed: !newState.todos[idx].completed};
            console.log(newTodo);
            const newTodos = [
                ...newState.todos.slice(0, idx),
                newTodo,
                ...newState.todos.slice(idx + 1)
            ];

            console.log(newTodos);
            return {...newState, newTodos};

    //     case FILTERS.TOGGLE_TODO:
    //         return state.map(todo =>
    //             (todo.id === action.id)
    //                 ? {...todo, completed: !todo.completed}
    //                 : todo
    //         );
    //
        default:
            return state
    }


    //console.log(1111 , state, action);
    // switch (action.type) {
    //     case 'FETCHING_FAILED':
    //         return action.hasErrored
    //     default:
    //         return state;
    // }

    return state;
}



// export function isLoading(state = false, action) {
//     switch (action.type) {
//         case 'IS_LOADING':
//             return action.isLoading;
//
//         default:
//             return state;
//     }
// }
//
// export function fetchDataSuccess(state = [], action) {
//
//     console.log(action, state);
//     switch (action.type) {
//
//         case 'FETCH_DATA_SUCCESS':
//             debugger;
//
//             return  Object.assign({}, state, state.todos, action.items.tasks);
//
//
//         default:
//             return state;
//     }
// }
const rootReducer = combineReducers({
    // visibilityFilter,
    // fetchingFailed,
    // isLoading,
    // fetchDataSuccess,
    // todos,
    todoStore: todoReducer,
    routing
});

export default rootReducer;
