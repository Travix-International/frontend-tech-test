class TaskServer {
  constructor(tasksContainer) {
    /**
     * Order all task by id to avoid errors
     */
    this.tasksContainer = {};
    this.tasksContainer.tasks = tasksContainer.tasks.sort((a, b) => {
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
    const totalSize = this.tasksContainer.tasks.length;
    const lastTask = this.tasksContainer.tasks[totalSize - 1];
    const lastID = parseInt(lastTask.id, 10);
    return (Number.isNaN(lastID) ? totalSize : lastID) + 1;
  };

  parseId(id) {
    return parseInt(id, 10);
  }

  idIsValid(id) {
    return !Number.isNaN(this.parseId(id));
  }

  getAll() {
    return this.tasksContainer;
  }

  find(id) {
    let task = null;
    const parsedId = this.parseId(id);

    if (this.idIsValid(id)) {
      task = this.tasksContainer.tasks.find(item => this.parseId(item.id) === parsedId);
    }

    return task;
  }

  findIndex(id) {
    let task = null;
    const parsedId = this.parseId(id);

    if (this.idIsValid(id)) {
      task = this.tasksContainer.tasks.findIndex(item => this.parseId(item.id) === parsedId);
    }

    return task;
  }

  add(title, description) {
    const task = {
      id: this.getTasksNextID(),
      title: title,
      description: description,
    };

    this.tasksContainer.tasks.push(task);

    return task;
  }

  delete(index) {
    this.tasksContainer.tasks.splice(index, 1);
  }

  update(task, title, description) {
    task.title = title;
    task.description = description;

    return task;
  }
}

module.exports = TaskServer;
