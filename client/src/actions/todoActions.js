import axios from 'axios';
import * as types from '../constants/ActionTypes';

/////////////// ACTION CREATORS ///////////////////

export const actionCreators = {

	getTasks: (tasks) => {
		return {
			type: types.GET_TASKS,
			tasks
		}
	},

	postTask: (title, desc) => {
		return {
			type: types.ADD_TODO,
			title,
			desc
		}
	},

	updateTask: (id) => {
		return {
			type: types.MODIFY_TODO,
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
		const qs = desc === '' ? `${title}/${title}` : `${title}/${desc}`;

        axios.post(`/task/create/${qs}`, {})
		.then(function (response) {
			dispatch(actionCreators.postTask(title, desc));
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

export default actionCreators;