import Task from 'application/entities/Task'
import apiService from 'application/services/apiService'

export const CREATE_TASK = 'CREATE_TASK'

const dependencies = { Task }

const match = (action) => action.type === CREATE_TASK

const execute = ({ tasks }, { task: taskCreated }, injection) => {
  const { Task } = Object.assign({}, dependencies, injection)
  tasks.push(new Task(taskCreated))
  return { tasks: [ ...tasks ] }
}

export const createTask = (title, description) => (dispatch) => {
  return apiService('POST', `task/create/${title}/${description}`)
    .then((task) => dispatch({ type: CREATE_TASK, task }))
}

export default {
  match,
  execute
}

