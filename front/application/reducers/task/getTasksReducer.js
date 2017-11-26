import Task from 'application/entities/Task'
import apiService from 'application/services/apiService'

export const GET_TASKS = 'GET_TASKS'

const dependencies = { Task }

const match = (action) => action.type === GET_TASKS

const execute = (state, { tasks }, injection) => {
  const { Task } = Object.assign({}, dependencies, injection)

  const tasksEntities = tasks.map((task) => new Task(task))

  return { tasks: tasksEntities }
}

export const getTasks = () => (dispatch) => {
  return apiService('GET', 'tasks')
    .then((data) => dispatch({ type: GET_TASKS, ...data }))
}

export default {
  match,
  execute
}
