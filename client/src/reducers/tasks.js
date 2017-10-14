import { PENDING, FETCH_ALL_SUCCESS, CREATE_SUCCESS, UPDATE_SUCCESS, DELETE_SUCCESS } from '../actions/actionTypes';

function tasks( state = { isFetching: false, tasks: []}, action){
	switch (action.type) {
		case PENDING:
    return {
			...state,
		  loading: true
		}
    case FETCH_ALL_SUCCESS:
    return {
			...state,
			loading: false,
      tasks: action.payload,
		}
		case CREATE_SUCCESS:
			const createdTask = [{
				id: state.tasks.length,
				...action.payload
			}]
		 return {
			 ...state,
		   loading: false,
			 tasks: state.tasks.concat(createdTask)
		 }
		 case UPDATE_SUCCESS:
		 console.log('ACTIOOOOO', action.payload.id);

		 const updatedTasks = [];

		 for (const task of state.tasks) {
			 if (task.id === action.payload.id) {
				 updatedTasks.push(action.payload);
			 } else {
				 updatedTasks.push(task);
			 }
		 }
		  console.log('ACTIOOOOO', updatedTasks);
 		 return {
 			 ...state,
 		   loading: false,
 			 tasks: updatedTasks
 		 }
		 case DELETE_SUCCESS:
 		 return {
 			 ...state,
 		   loading: false,
 			 tasks: state.tasks.filter( task => task.id !== action.payload)
 		 }
		default:
			return state
	}
}

export default tasks;
