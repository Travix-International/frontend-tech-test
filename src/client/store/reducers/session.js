import * as actions from '../actions/index';

const session = (state = { todos: [], isLoading: false }, action) => {
		switch (action.type) {
		case actions.SET_TODOS:
			return Object.assign({}, state, {
				todos: action.todos
			});
		case actions.ADD_TODO:
			return Object.assign({}, state, {
				todos: [
					action.todo,
					...state.todos || []
				]
			});
		case actions.ADD_UPDATED_TODO:
			var todoItems = state.todos.map((item, index) => {
						        if(item.id !== action.todo.id) {
						            return item;
						        }
						        
						        return Object.assign({}, action.todo);    
						    });

			return Object.assign({}, state, {
				todos: todoItems
			});
		case actions.REMOVE_TODO:
			var taskIndex = state.todos.findIndex(obj => obj.id == action.id);
			return Object.assign({}, state, {
				todos: [
					...state.todos.slice(0, taskIndex),
    				...state.todos.slice(taskIndex + 1)
				]
			});
		case actions.SET_TODO_IS_EDITING:
			var todoItems = state.todos.map((item, index) => {
						        if(item.id !== action.id) {
						            return item;
						        }
						        
						        return Object.assign({}, item, {
											isEditing: action.isEditing
										});    
						    });

			return Object.assign({}, state, {
				todos: todoItems
			});
		case actions.SET_TODO_IS_COMPLETED:
			var todoItems = state.todos.map((item, index) => {
						        if(item.id !== action.id) {
						            return item;
						        }
						        
						        return Object.assign({}, item, {
											isCompleted: action.isCompleted
										});    
						    });

			return Object.assign({}, state, {
				todos: todoItems
			});
		case actions.SET_SESSION_IS_LOADING:
			return Object.assign({}, state, {
				isLoading: action.isLoading
			});
		default:
			return state;
	}
};
module.exports = session;