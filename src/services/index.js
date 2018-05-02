import TasksService from './tasksService'
import TaskService from './taskService'
import SubtaskService from './subtaskService'

export default {
  tasksService: new TasksService(),
  taskService: new TaskService(),
  subtaskService: new SubtaskService()
}
