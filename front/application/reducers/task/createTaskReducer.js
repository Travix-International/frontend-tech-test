import Task from 'application/entities/Task'

export const CREATE_TASK = 'CREATE_TASK'

const dependencies = { Task }

const match = (action) => action.type === CREATE_TASK

const execute = ({ tasks }, { data: { task: taskCreated } }, injection) => {
  const { Task } = Object.assign({}, dependencies, injection)

  const tasksEntities = tasks.push(new Task(taskCreated))

  return { tasks: [ ...tasksEntities ] }
}

export default {
  match,
  execute
}

