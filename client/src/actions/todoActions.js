import * as types from '../constants/ActionTypes';

export const addTodo = (task) => {
	return {
		type: types.ADD_TODO,
		task
	}	
}

export const modifyTodo = (id) => {
	return {
		type: types.MODIFY_TODO,
		id
	}
}

export const deleteTodo = (id) => {
	return {
		type: types.DELETE_TODO,
		id
	}
}