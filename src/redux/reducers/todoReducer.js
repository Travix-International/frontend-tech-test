import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState.js";

export default function todoReducer(state =initialState.todoItems , action){
    switch(action.type){
        case actionTypes.CREATE_TODO_SUCCESS : {
                return [...state , {...action.todoItem}]
        }
        case actionTypes.LOAD_TODO_SUCCESS : {
            console.log(action)
            return action.todoItems;
        }
        case actionTypes.DELETE_TODO :{
            console.log(action);
            return state.filter(todo => todo.id !== action.todoId);;
        }
        case actionTypes.UPDATE_TODO : {
            
            console.log(action);
            return state.map(item =>
                item.id === action.todoItem.id ? action.todoItem : item
              );
        }
        default : {
            return state;
        }
    }
}