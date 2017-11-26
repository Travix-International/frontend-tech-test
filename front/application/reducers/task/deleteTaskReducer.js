export const DELETE_TASK = 'DELETE_TASK'

const match = (action) => action.type === DELETE_TASK

const execute = ({ tasks }, { data: { task: taskToDelete } }, injection) => {
  const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id)

  return { tasks: [ ...updatedTasks ]  }
}

export default {
  match,
  execute
}
