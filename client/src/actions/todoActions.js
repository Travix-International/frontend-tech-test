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
		axios.put(`/task/update/${id}/null/null/${completed}`)
		.then(function (response) {
			dispatch(actionCreators.toggleTask(id, completed));
		})
		.catch((err) => {
			console.error.bind(err);
		})
	}
}

export default actionCreators;