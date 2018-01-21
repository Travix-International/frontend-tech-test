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

	addTodo: (task) => {
		return {
			type: types.ADD_TODO,
			task
		}
	},

	modifyTodo: (id) => {
		return {
			type: types.MODIFY_TODO,
			id
		}
	},

	deleteTodo: (id) => {
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
        axios.get(`/tasks`)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          dispatch(actionCreators.addTodo(task));
        })
        .catch((err) => {
          console.error.bind(err);
        })
    }
}

export default actionCreators;