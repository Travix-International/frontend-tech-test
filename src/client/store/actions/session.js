import { doNetworkRequest } from '../../utilities/network';
// import { setAddTodoIsLoading } from './ui/addTodo';
import { closeDeleteDialog, closeAddTodoDialog, closeEditTodoDialog } from './ui/dialogs';

export const ADD_TODO = 'ADD_TODO';
export const ADD_UPDATED_TODO = 'ADD_UPDATED_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_TODOS = 'SET_TODOS';
export const SET_TODO_IS_EDITING = 'SET_TODO_IS_EDITING';
export const SET_TODO_IS_COMPLETED = 'SET_TODO_IS_COMPLETED';
export const SET_SESSION_IS_LOADING = 'SET_SESSION_IS_LOADING';
export const SET_SELECTED_TODO_ID = 'SET_SELECTED_TODO_ID';

const setSessionIsLoading = (isLoading) => {
	return {
		type: SET_SESSION_IS_LOADING,
		isLoading: isLoading
	}
}
exports.setTodos = setTodos;

const addTodo = (todo) => {
	return {
		type: ADD_TODO,
		todo: todo
	}
}
exports.addTodo = addTodo;

const addUpdatedTodo = (todo) => {
	return {
		type: ADD_UPDATED_TODO,
		todo: todo
	}
}
exports.addUpdatedTodo = addUpdatedTodo;

const removeTodo = (id) => {
	return {
		type: REMOVE_TODO,
		id: id
	}
}
exports.removeTodo = removeTodo;

const setTodos = (todos) => {
	return {
		type: SET_TODOS,
		todos: todos
	}
}
exports.setTodos = setTodos;

const setTodoIsEditing = (id, isEditing) => {
	return {
		type: SET_TODO_IS_EDITING,
		id: id,
		isEditing: isEditing
	}
}
exports.setTodoIsEditing = setTodoIsEditing;

const setTodoIsCompleted = (id, isCompleted) => {
	return {
		type: SET_TODO_IS_COMPLETED,
		id: id,
		isCompleted: isCompleted
	}
}
exports.setTodoIsCompleted = setTodoIsCompleted;

// TODO: Finish this properly
const updateTodo = (id) => {
	return (dispatch, getState) => {		
		var todo = getState().ui.dialogs.editTodo.todo;

		if (!todo.title || !todo.description)
		{
			// TODO: Add invalid state here

			return;
		}		

		var bodyJSON = {
			id: todo.id,
			title: todo.title,
			description: todo.description,
			isCompleted: todo.isCompleted
		};

		var body = JSON.stringify(bodyJSON);

		// TODO: Add loaders
		dispatch(doNetworkRequest(`/tasks/update/${todo.id}`, 'PUT', body, (responseJson) => {
			dispatch(addUpdatedTodo(responseJson.task));
			dispatch(closeEditTodoDialog());
		}));
	}
};
exports.updateTodo = updateTodo;

const updateTodoIsCompleted = (id, isCompleted) => {
	return (dispatch, getState) => {	
	// TODO: Change this to use the edit page item	
		var todo = getState().session.todos.find((item) => {
						return item.id === id;
					});		

		var bodyJSON = {
			id: todo.id,
			title: todo.title,
			description: todo.description,
			isCompleted: isCompleted
		};
		var body = JSON.stringify(bodyJSON);

		// TODO: Add loaders
		dispatch(doNetworkRequest(`/tasks/update/${todo.id}`, 'PUT', body, (responseJson) => {
			dispatch(setTodoIsCompleted(id, isCompleted));
		}));
	}
};
exports.updateTodoIsCompleted = updateTodoIsCompleted;

const deleteTodo = (id) => {
	return (dispatch) => {
		if (!id)
		{
			return;
		}

		dispatch(doNetworkRequest(`/tasks/delete/${id}`, 'DELETE', null, (responseJson) => {
			dispatch(removeTodo(id));
			dispatch(closeDeleteDialog());
		}));
	}
};
exports.deleteTodo = deleteTodo;

const createTodo = () => {
	return (dispatch, getState) => {
		var addTodoDialogState = getState().ui.dialogs.addTodo;
		var title = addTodoDialogState.title;
		var description = addTodoDialogState.description;

		if (!title || !description)
		{
			// TODO: Add invalid state here

			return;
		}		

		var body = {
			title: title,
			description: description
		};

		dispatch(doNetworkRequest(`/tasks/create/${title}/${description}`, 'POST', body, (responseJson) => {
			dispatch(addTodo(responseJson.task));
			dispatch(closeAddTodoDialog());
		}));
	}
};
exports.createTodo = createTodo;

const loadTodos = () => {
	return (dispatch) => {
		dispatch(setSessionIsLoading(true));
		dispatch(doNetworkRequest('/tasks/', 'GET', null, (responseJson) => {			
			dispatch(setSessionIsLoading(false));
			dispatch(setTodos(responseJson.tasks));
		}));
	}
};
exports.loadTodos = loadTodos;