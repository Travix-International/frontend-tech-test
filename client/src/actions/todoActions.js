import axios from 'axios';
import * as types from '../constants/ActionTypes';
import {parseBoolean} from '../utils/helpers'

/////////////// ACTION CREATORS ///////////////////

export const actionCreators = {

	getTasks: (tasks) => {
		return {
			type: types.GET_TASKS,
			tasks
		}
	},

	postTask: (title, description) => {
		return {
			type: types.ADD_TODO,
			title,
			description
		}
	},

	toggleTask: (id, completed) => {
		return {
			type: types.TOGGLE_TODO,
			id,
			completed
		}
	},

	updateTask: (id, task) => {
		return {
			type: types.UPDATE_TODO,
			id,
			task
		}
	},

	editTask: (id) => {
		return {
			type: types.EDIT_MODE,
			id
		}
	},

	closeEditTask: (id) => {
		return {
			type: types.CLOSE_EDIT_MODE,
			id
		}
	},

	deleteTask: (id) => {
		return {
			type: types.DELETE_TODO,
			id
		}
	}
}

/////////////// ACTION DISPATCHER FUNCTIONS ///////////////////

export const getAllTasks = () => dispatch => {
	axios.get(`/tasks`)
	.then((response) => {
		return response.data;
	})
	.then((data) => {
		dispatch(actionCreators.getTasks(data.tasks));
	})
	.catch((err) => {
		console.error.bind(err);
	})
}

export const addNewTask = (title, desc = '') => {
    return dispatch => {
		//todo: make the description optional
		const qs = desc === '' ? `${title}` : `${title}/${desc}`;
		console.log('description', desc);

        axios.post(`/task/create/${qs}`, {})
		.then(function (response) {
			dispatch(actionCreators.postTask(title, desc));
		})
		.catch((err) => {
			console.error.bind(err);
		})
    }
}

export const deleteTask = (id) => dispatch => {
	axios.delete(`task/delete/${id}`)
	.then((response) => {
		if (response.status === 200) {
			dispatch(actionCreators.deleteTask(id));
		}
	})
	.catch((err) => {
		console.error.bind(err);
	})
}

export const toggleTask = (id, completed) => {
	return dispatch => {
		axios.put(`/task/toggle/${id}/${completed}`)
		.then(function (response) {
			dispatch(actionCreators.toggleTask(id, completed));
		})
		.catch((err) => {
			console.error.bind(err);
		})
	}
}

export const updateTask = (id, title, description, completed) => {
	return dispatch => {
		axios.put(`/task/update/${id}/${title}/${description}/${completed}`)
		.then(function (response) {
			dispatch(actionCreators.updateTask(id, {id, title, description, completed: parseBoolean(completed) }));
		})
		.catch((err) => {
			console.error.bind(err);
		})
	}
}

export const editTask = (id) => dispatch => {
	dispatch(actionCreators.editTask(id));
}

export const closeEditTask = (id) => dispatch => {
	dispatch(actionCreators.closeEditTask(id));
}

export default actionCreators;