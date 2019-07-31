import API from './API';

class Task extends API {
  constructor() {
    super();
    this.init();
  }

  /**
   * [GET] Fetch tasks list
   *
   * @return {object} - Response object with data as array of tasks
   */
  async getTasks() {
    const response = await this.request('/tasks');
    return response;
  }

  /**
   * [GET] Fetch a task by given id
   *
   * @param {number} id - Task id
   *
   * @return {object} - Response object with data as task
   */
  async getTask(id) {
    const response = await this.request(`/task/${id}`);
    return response;
  }

  /**
   * [POST] Create new Task
   *
   * @param {string} title - Task title
   * @param {string} description - Task description
   *
   * @return {object} - Response object with created message
   */
  async createTask(title, description) {
    const response = await this.request(`/task/create/${title}/${description}`, 'POST');
    return response;
  }
}

export default Task;
