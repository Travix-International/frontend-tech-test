import axios from "axios";
/////////////////CONSTANTS/////////////////////
const GET_ALL_TASKS = "GET_ALL_TASKS";
const POST_TASK = "POST_TASK";
const EDIT_TASK = "EDIT_TASK";
const DELETE_TASK = "DELETE_TASK";
/////////////////ACTIONS//////////////
const getTasks = (tasks) => ({type: GET_ALL_TASKS, tasks});
let nextTodoId = 0;
const addTask = (task) => ({type: POST_TASK, id: nextTodoId++, task});
const taskEdit = (id) => ({type: EDIT_TASK, id });
const taskDelete = (id) => ({type: DELETE_TASK, id});
/////////////////REDUCER/////////////////////
//initiate your starting state
let initial = {
  tasks: []
};
const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return Object.assign({}, state, {tasks: action.tasks.objects});
    case POST_TASK:
      let id = action.id;
      let task = action.task;
      task['id'] = id;
      let updatedTasks = [task].concat(state.tasks);
      return Object.assign({}, state, {tasks: updatedTasks, id:id});
    case EDIT_TASK:
      let newArr = state.tasks.map((task) => {
        if(task.id === action.id) {
          task.title = prompt('Please, choose the new title');
          task.description = prompt('Please, choose the new description');
        };
        return task;
      });
      return Object.assign({}, state, {tasks: newArr});
    case DELETE_TASK:

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
  axios.post(`/task/create/${task}/${description}`, {type_slug: "tasks", title: task, content: "New Task"})
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const editTask = (id) => (dispatch) => {
  dispatch(taskEdit(id));

  axios.put(`/task/update/${id}/${task}/${description}`, {title: title, description:description })
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

  axios.delete(`/task/delete/${id}`, {id: id })
    .then((response) => {
    console.log(response.data)
    })
    .catch((err) => {
      console.error.bind(err);
    })
};
