import * as actionTypes from '../actions/actionTypes';

const initialState = {
    toDoList: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_TODO:
            return {
                ...state,
                toDoList: action.toDoList
            };
        case actionTypes.ADD_TODO:
            return {
                ...state,
                toDoList :[
                    ...state.toDoList,
                    {
                        id: action.id,
                        title: action.title,
                        completed: false,
                    }
                ]
            };
        case actionTypes.TOGGLE_TODO:
            return {
                ...state,
                toDoList: state.toDoList.map(todo => {
                    return (todo.id === action.id)
                        ? { ...todo, completed: !todo.completed }
                        : todo;
                }),
            };
        case actionTypes.DELETE_TODO:
            return {
                ...state,
                toDoList: state.toDoList.filter(todo => todo.id !== action.id),
            };
        case actionTypes.EDIT_TODO:
            return {
                ...state,
                toDoList: state.toDoList.map(todo => {
                    return (todo.id === action.id)
                        ? { ...todo, title: action.title }
                        : todo;
                }),
            }
        default:
            return state;
    }
}

export default reducer;