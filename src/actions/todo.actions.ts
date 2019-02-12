import { ITodoItem, IToast } from "../interfaces/interface";

export class TodoActions {
    static ADD_TODO_ITEM = 'ADD_TODO_ITEM';
    addTodoItem = (todoItem) => {
        return {
            type: TodoActions.ADD_TODO_ITEM,
            payload: todoItem
        }
    }
    static UPDATE_TODO_ITEM = 'UPDATE_TODO_ITEM';
    updateTodoItem = (todoItem) => {
        return {
            type: TodoActions.UPDATE_TODO_ITEM,
            payload: todoItem
        }
    }
    static DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
    deleteTodoItem = (todoItem) => {
        return {
            type: TodoActions.DELETE_TODO_ITEM,
            payload: todoItem
        }
    }
    static SAVE_TODO_ITEMS = 'SAVE_TODO_ITEMS'
    saveTodoItemsList = (todoItems) => {
        return {
            type: TodoActions.SAVE_TODO_ITEMS,
            payload: todoItems
        }
    }
    static OPEN_TODO_ITEM = 'OPEN_TODO_ITEM';
    openTodoModal = (todoItem?:ITodoItem) => {
        return {
            type: TodoActions.OPEN_TODO_ITEM,
            payload: todoItem
        }
    }
    static CLOSE_TODO_ITEM = 'CLOSE_TODO_ITEM'
    closeTodoModal = () => {
        return {
            type: TodoActions.CLOSE_TODO_ITEM
        }
    }
    static UPDATE_TODO_SELECTION = 'UPDATE_TODO_SELECTION';
    updateTodoSelection=(itemId)=>{
        return {
            type:TodoActions.UPDATE_TODO_SELECTION,
            payload:itemId
        }
    }
    static CLEAR_TODO_SELECTION = 'CLEAR_TODO_SELECTION'
    clearTodoSelection =()=>({type:TodoActions.CLEAR_TODO_SELECTION})

    static SHOW_TOAST = 'SHOW_TOAST';
    showToast=(toastConfig:IToast)=>{
        return {
            type:TodoActions.SHOW_TOAST,
            payload:toastConfig
        }
    }
    static HIDE_TOAST = 'HIDE_TOAST';
    hideToast=()=>{
        return {
            type:TodoActions.HIDE_TOAST
        }
    }
}

export default new TodoActions();