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

	postTask: (task) => {
		return {
			type: types.ADD_TODO,
			task
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


export const addNewTask = (task) => {
    return dispatch => {
        axios.post(`/task/create/${task}/${task}`, {})
		.then(function (response) {
			console.log('response', response);
			dispatch(actionCreators.postTask(task));
		})
        //.then((response) => {
			//	console.log('res', response);
			//dispatch(actionCreators.postTask(task));
        //  //return response.data;
        //})
        //.catch((err) => {
        //  console.error.bind(err);
        //})
    }
}

export default actionCreators;