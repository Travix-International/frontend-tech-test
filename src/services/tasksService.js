import BaseService from './BaseService'

export default class TasksService extends BaseService {
  constructor() {
    super()
    this.path = 'tasks'
  }

  loadTasks() {
    return this.request.get().send()
  }
}
