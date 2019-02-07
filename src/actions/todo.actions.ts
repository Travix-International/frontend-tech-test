export class TodoActions {
    static ADD_TODO_ITEM = 'ADD_TODO_ITEM';
    addTodoItem=(todoItem)=>{
        return {
            type:TodoActions.ADD_TODO_ITEM,
            payload:todoItem
        }
    }
    static UPDATE_TODO_ITEM = 'UPDATE_TODO_ITEM';
    updateTodoItem=(todoItem)=>{
        return {
            type:TodoActions.UPDATE_TODO_ITEM,
            payload:todoItem
        }
    }
    static DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
    deleteTodoItem=(todoItem)=>{
        return {
            type:TodoActions.DELETE_TODO_ITEM,
            payload:todoItem
        }
    }
}

export default new TodoActions();