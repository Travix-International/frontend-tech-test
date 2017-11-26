export const DELETE_TASK = 'DELETE_TASK'
import apiService from 'application/services/apiService'

const match = (action) => action.type === DELETE_TASK

const execute = ({ tasks }, { task: taskToDelete }, injection) => {
  const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id)

  return { tasks: [ ...updatedTasks ]  }
}

export const deleteTask = (task) => (dispatch) => {
  return apiService('DELETE', `task/delete/${task.id}`)
    .then(() => dispatch({ type: DELETE_TASK, task }))
}

export default {
  match,
  execute
}
