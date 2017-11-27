import Task from 'application/entities/Task'
import apiService from 'application/services/apiService'

export const GET_TASKS = 'GET_TASKS'

const dependencies = { apiService }

const match = (action) => action.type === GET_TASKS

const execute = (state, { tasks }, injection) => {
  const tasksEntities = tasks.map((task) => new Task(task))
  return { tasks: tasksEntities }
}

export const getTasks = (injection) => (dispatch) => {
  const { apiService } = Object.assign({}, dependencies, injection)
  return apiService('GET', 'tasks')
    .then((data) => dispatch({ type: GET_TASKS, ...data }))
}

export default {
  match,
  execute
}
