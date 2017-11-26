import Task from 'application/entities/Task'

export const EDIT_TASK = 'EDIT_TASK'

const dependencies = { Task }

const match = (action) => action.type === EDIT_TASK

const execute = ({ tasks }, { data: { task: taskEdited } }, injection) => {
  const { Task } = Object.assign({}, dependencies, injection)

  const tasksEntities = tasks.map((task) => task.id === taskEdited.id ? new Task(taskEdited) : task)

  return { tasks: [ ...tasksEntities ] }
}

export default {
  match,
  execute
}
