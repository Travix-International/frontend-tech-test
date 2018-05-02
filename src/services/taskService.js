import BaseService from './BaseService'

export default class TaskService extends BaseService {
  constructor() {
    super()
    this.path = 'task'
  }

  createTask(task) {
    return this.request.post().body(task).url('create').send()
  }

  updateTask(task) {
    return this.request.put().body(task).url(`update/${task.id}`).send()
  }

  deleteTask(task) {
    return this.request.del().url(`delete/${task.id}`).send()
  }
}
