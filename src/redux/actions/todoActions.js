import * as actionTypes from "./actionTypes";

import * as todoApi from "../../../api/todoApi";

export function createTodoSuccess(todoItem){
     return {type: actionTypes.CREATE_TODO_SUCCESS , todoItem};
}
export function DeleteTodoSuccess(todoId){
     return {type: actionTypes.DELETE_TODO , todoId};
}

export function UpdateTodoSuccess(todoItem){
     return {type: actionTypes.UPDATE_TODO , todoItem};
}

export function createTodo(todoItem){
     return function(dispatch, getState) {
          return todoApi
            .saveTask(todoItem)
            .then(todoItem => {
               dispatch(createTodoSuccess(todoItem))
            })
            .catch(error => {
              throw error;
            });
        };
}
export function loadTodosSuccess(todoItems){
     return {type: actionTypes.LOAD_TODO_SUCCESS , todoItems};
}
export function loadTodoItems(){
     return function(dispatch){
          return todoApi.getTodos().then(todoItems => {
                    dispatch(loadTodosSuccess(todoItems));
          }).catch(error =>{
               throw error;
          })
     }
}


export function updateTodo(todoItem){
     return function(dispatch, getState) {
          return todoApi
            .updateTask(todoItem)
            .then(todoItem => { 
                 dispatch(UpdateTodoSuccess(todoItem))
            })
            .catch(error => {
              throw error;
            });
        };
}

export function deleteTodoItem(itemid){
     return function(dispatch){
          return todoApi.deleteTask(itemid).then(() => {
                    dispatch(DeleteTodoSuccess(itemid));
          }).catch(error =>{
               throw error;
          })
     }
}
