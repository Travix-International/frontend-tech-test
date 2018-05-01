import { TASK_STATUSES } from 'constants/taskStatuses'
import tasksFactory from './tasksFactory'

function filter(tasks) {
  const filtredTasks = tasks.filter(x => x.status === TASK_STATUSES.TODO)
  return filtredTasks
}

export default tasksFactory(filter)

