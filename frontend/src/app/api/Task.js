import API from './API';

class Task extends API {
  constructor() {
    super();
    this.init();
  }

  /**
   * Fetch tasks list
   *
   * @return {object} - Response object with data as array of tasks
   */
  async getTasks() {
    const tasks = await this.request('/tasks');
    return tasks;
  }

  /**
   * Fetch a task by given id
   *
   * @param {number} id - Task id
   *
   * @return {object} - Response object with data as task
   */
  async getTask(id) {
    const task = await this.request(`/task/${id}`);
    return task;
  }
}

export default Task;
