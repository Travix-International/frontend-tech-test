import axios from "axios";
import { getTasks, addTask, taskUpdate, taskDelete } from '../actions/taskActions';
import * as types from '../constants/appConstants';

/////////////// CONFIGURING REDUCER ///////////////////

let initial = {
  tasks: []
};
const reducer = (state = initial, action) => {
  switch (action.type) {
    case types.GET_ALL_TASKS:
      return Object.assign({}, state, {tasks: action.tasks.tasks});
    case types.POST_TASK:
      let id = action.id;
      let task = action.task;
      task['id'] = id;
      let updatedTasks = [task].concat(state.tasks);
      return Object.assign({}, state, {tasks: updatedTasks, id:id});
    case types.UPDATE_TASK:
      let newArr = state.tasks.map((task) => {
        if(task.id === action.id) {
          task.title = prompt('Please, choose the new title');
          task.description = prompt('Please, choose the new description');
        };
        return task;
      });
      return Object.assign({}, state, {tasks: newArr});
    case types.DELETE_TASK:

      let arr = state.tasks.filter((task) => {
        return !(task.id === action.id);
      });
      return Object.assign({}, state, {tasks: arr});
    default:
      return state;
  }

};

export default reducer;


/////////////// ACTION DISPATCHER FUNCTIONS///////////////////

export const getAllTasks = () => dispatch => {
  axios.get(`/tasks`)
    .then((response) => {
      return response.data;
    })
    .then((tasks) => {
      dispatch(getTasks(tasks))
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const postNewTask = (task, description) => dispatch => {
  dispatch(addTask({title: task, description: description }));
  axios.post(`/task/create/${task}/${description}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const editTask = (id, task) => (dispatch) => {
  dispatch(taskUpdate(id));
  const title = task.title;
  const description = task.description;
  axios.put(`/task/update/${id}/${title}/${description}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const deleteTask = (id) => dispatch => {


  dispatch(taskDelete(id));
console.log(id);

  axios.delete(`/task/delete/${id}`)
    .then((response) => {
    console.log(response.data)
    })
    .catch((err) => {
      console.error.bind(err);
    })
};
