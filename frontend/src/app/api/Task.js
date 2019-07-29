import API from './API';

class Task extends API {
  constructor() {
    super();
    this.init();
  }

  /**
   * Fetch tasks list
   *
   * @param {string} path - Request route (/{resource})
   * @param {object} [params={}] - Query params
   *
   * @return {object} - Response array of task object
   */
  async getTask(params = {}) {
    const tasks = await this.request('/tasks', 'GET', params);
    return tasks;
  }
}

export default Task;
