class TaskServer {
  constructor() {
    this.tasks = {};
  }

  /**
   * Load the JSON object and Order all tasks by id to avoid errors
   * @param {object} tasksJSON JSON object that contains a tasks property
   */
  loadJSON(tasksJSON){
    this.tasks = this.orderTasks(tasksJSON.tasks);
  }

  /**
   * Returns the ordered collection
   * @returns {object[]}
   */
  orderTasks(tasks) {
    return tasks.sort((a, b) => {
      const aID = parseInt(a.id, 10);
      const bID = parseInt(b.id, 10);
      let order = 0;

      if (aID < bID) {
        order = -1;
      } else if (aID > bID) {
        order = 1;
      }

      return order;
    });
  }

  /**
   * Returns the next ID to be used on a task
   * @returns {Number}
   */
  getTasksNextID() {
    const totalSize = this.tasks.length;
    const lastTask = this.tasks[totalSize - 1];
    const lastID = parseInt(lastTask.id, 10);
    return (Number.isNaN(lastID) ? totalSize : lastID) + 1;
  };

  /**
   * Parse a give id
   *
   * @param {number|string} id
   * @returns {number|NaN}
   * @memberof TaskServer
   */
  parseId(id) {
    return parseInt(id, 10);
  }

  /**
   * Evaluates if the given id is valid
   *
   * @param {number|string} id
   * @returns {boolean}
   * @memberof TaskServer
   */
  idIsValid(id) {
    return !Number.isNaN(this.parseId(id));
  }

  /**
   * Gets the task the collection
   *
   * @returns {object[]} Task object
   * @memberof TaskServer
   */
  getAll() {
    return { tasks: this.tasks };
  }

  /**
   * Finds a task by id
   *
   * @param {number|string} id
   * @returns {object} Task object
   * @memberof TaskServer
   */
  find(id) {
    let task = null;
    const parsedId = this.parseId(id);

    if (this.idIsValid(id)) {
      task = this.tasks.find(item => this.parseId(item.id) === parsedId);
    }

    return task;
  }

  /**
   * Finds a task index by id
   *
   * @param {number|string} id
   * @returns {number} Task index on the task collection
   * @memberof TaskServer
   */
  findIndex(id) {
    let task = null;
    const parsedId = this.parseId(id);

    if (this.idIsValid(id)) {
      task = this.tasks.findIndex(item => this.parseId(item.id) === parsedId);
    }

    return task;
  }

  /**
   * Adds a task to the collection
   *
   * @param {string} title
   * @param {string} decription
   * @returns {object} Task object
   * @memberof TaskServer
   */
  add(title, description) {
    const task = {
      id: this.getTasksNextID(),
      title: title,
      description: description,
    };

    this.tasks.push(task);

    return task;
  }

  /**
   * Removes a task from the collection
   *
   * @param {number} index
   * @memberof TaskServer
   */
  delete(index) {
    this.tasks.splice(index, 1);
  }

  /**
   * Updates a task from the collection
   *
   * @param {object} task
   * @param {string} title
   * @param {string} decription
   * @returns {object} Task object
   * @memberof TaskServer
   */
  update(task, title, description) {
    task.title = title;
    task.description = description;

    return task;
  }
}

module.exports = TaskServer;
