import Task from 'application/entities/Task'

export const GET_TASKS = 'GET_TASKS'

const dependencies = { Task }

const match = (action) => action.type === GET_TASKS

const execute = (state, { data: { tasks } }, injection) => {
  const { Task } = Object.assign({}, dependencies, injection)

  const tasksEntities = tasks.map((task) => new Task(task))

  return { tasks: tasksEntities }
}

export default {
  match,
  execute
}
