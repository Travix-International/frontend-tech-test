import BaseService from './BaseService'

export default class SubtaskService extends BaseService {
  constructor() {
    super()
    this.path = 'subtask'
  }

  createSubTask(task) {
    return this.request.post().body(task).url(`create/${task.id}`).send()
  }

  updateSubTask(task) {
    return this.request.put().body(task).url(`update/${task.parentId}/${task.id}`).send()
  }

  deleteSubTask(task) {
    return this.request.del().url(`delete/${task.parentId}/${task.id}`).send()
  }
}
