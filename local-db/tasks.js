const TASK_CONST = require ('../constants/task-type');
const labels = require ('../constants/labels');
const crypto = require ('crypto');

const TASK_TYPE = TASK_CONST.TASK;
const LIMIT = TASK_CONST.LIMIT;

let userData = {};

/**
   * @description A utility function that determines whether the
   * supplied object is a valid task candidate or not.
   * @param {Object} task 
   */
const typeOfInputIsTask = (task) => {
  const required = TASK_TYPE;
  const requiredLength = Object.keys (TASK_TYPE),
        receivedLength = Object.keys (task);

  let mismatch = false;
  // for all keys required by the task object
  Object.keys (TASK_TYPE).forEach (key => {

    const typeValue = TASK_TYPE[key];

    // special type where the length of string received should be 1.
    if (typeValue === 'char') {
    
      const receivedValue = task[key],
            receivedTypeValue = typeof receivedValue;

      // check for string.
      if (receivedTypeValue !== typeof "random") {
        mismatch = true;
      }
      // then check the length.
      if (receivedValue.length !== 1) {
        mismatch = true;
      }
    } else {
      const receivedTypeValue = typeof task[key];
      if (receivedTypeValue.toLowerCase () !== typeValue.toLowerCase ()) {
        mismatch = true;
      }
    }
  });
  
  if (mismatch) {
    return false
  }
  return true;
}

/**
 * Tasks object - contains all tasks and provides public methods
 * for CRUD oprations.
 */
const TASKS = {
  registerUser (id) {
    if (userData[id]) {
      return;
    } else {
      userData [id] = {
        all: [],
        completed: [],
        pending: [],
        allTasks: {}
      }
    }
  },
  /**
   * @description function to get all data for the initialisation
   * of application.
   * @param {Number} count no of items to be fetched in first request.
   */
  getAppData (count, user) {
    count = count || LIMIT;
    return {
      tasks: this.convertToArray (user, 0, count),
      allCount: userData[user].all.length,
      doneCount: userData[user].completed.length,
      pendingCount: userData[user].pending.length
    }
  },
  /**
   * @description function to get all tasks.
   * @param {Number} page current page number
   * @param {Number} limit no of items to be retrieved
   * @param {String} type of task to be retrieved.
   * @param {String} user
   * @return {Array}
   */
  getAllTasks (page, limit, type, user) {
    let start = (page - 1) * limit,
        end = page * limit;
    try {
      const tasks = this.convertToArray (user, start, end, type);
      return {
        status: 1,
        tasks: tasks
      };
    } catch (e) {
      return {
        'status': -1,
        'message': labels.CATCH_ERROR
      }
    }

  },

  /**
   * @description function to extract the objects for the given ids of the array.
   * @param {Number} start index for the array.
   * @param {Number} end index for the array.
   * @param {String} type of task to be fetched.
   */
  convertToArray (user, start, end, type) {
    let tempArr = [],
        thisList = [];
    if (!type) {
      thisList = userData[user].all;
    } else {
      if (type === 'C') {
        thisList = userData[user].completed
      } else {
        thisList = userData[user].pending;
      }
    }
    for (let count = start; count < end; count++) {
      let task = userData[user].allTasks[thisList[count]];
      if (task) {
        tempArr.push (task);
      }
    }
    return tempArr;
  },

  /**
   * @description function to create a task.
   * @param {String} user
   * @param {Object} task to be created.
   * @return {Object} created task.
   */
  createTask (user, task) {
    try {
      if (typeOfInputIsTask (task)) {
        const id = 'T-' + crypto.randomBytes(11).toString('hex');

        const createdTask = {
          id,
          ...task,
          createdAt: Date.now (),
          lastUpdatedAt: Date.now ()
        }
        userData[user].allTasks [id] = createdTask;
        this.createIndex (user, createdTask);

        return {
          'status': 1,
          'message': labels.TASK_CREATED,
          'task': createdTask
        }
      } else {
        return {
          'status': -1,
          'message': labels.TYPE_OF_ERROR
        };
      }
    } catch (e) {
      console.error (e);
      return {
        'status': -1,
        'message': labels.CATCH_ERROR
      }
    }
  },

  /**
   * @description function to maintain the indices of
   * all, completed, and pending tasks.
   * @param {String} user
   * @param {Object} task object
   */
  createIndex (user, task) {
    userData[user].all.push (task.id);
    if (task.isCompleted) {
      userData[user].completed.push (task.id)
    } else {
      userData[user].pending.push (task.id)
    }
  },

  /**
   * @description function to return task content for the
   * given id.
   * @param {String} user
   * @param {String} id of the task
   */
  findById (user, id) {
    return userData[user].allTasks[id];
  },
  
  /**
   * @description function to delete a task.
   * @param {String} user
   * @param {String} id of the task
   */
  deleteById (user, id) {
    try {
      delete userData[user].allTasks[id];
      
      // asynchronously remove the id from the index array.
      setTimeout (() => {
        userData[user].all = userData[user].all.filter (taskId => taskId !== id);
        userData[user].completed = userData[user].completed.filter (taskId => taskId !== id);
        userData[user].pending = userData[user].pending.filter (taskId => taskId !== id);
      }, 0);

      return true;
    } catch (e) {
      return false;
    }
  },

  /**
   * @description function to update task.
   * @param {String} user
   * @param {String} id of the task to be updated. 
   * @param {Object} task object
   */
  updateTask (user, id, task) {
    try {
      if (typeOfInputIsTask (task)) {
        const thisTask = userData[user].allTasks[id];
        if (!thisTask) {
          throw new Error (`${labels.TASK_NOT_FOUND} ${id}`)
        }
        for (let key in task) {
          thisTask[key] = task[key];
        }
        thisTask ["lastUpdatedAt"] = Date.now ();
        this.updateIndex (user, thisTask);
        return {
          status: 1,
          message: labels.TASK_UPDATED,
          task: thisTask,
          allCount: userData[user].all.length,
          pendingCount: userData[user].pending.length,
          doneCount: userData[user].completed.length
        }
      } else {
        throw new Error (labels.CATCH_ERROR);
      }
    } catch (e) {
      return {
        status: -1,
        message: e.message
      }
    }
  },

  /**
   * @description function to update the indices when task is updated.
   * @param {String} user
   * @param {Object} updatedTask task object.
   */
  updateIndex (user, updatedTask) {
    // if new status is completed, remove it from pending and push to
    // completed.
    if (updatedTask.isCompleted) {
      userData[user].pending = userData[user].pending.filter (id => id !== updatedTask.id);
      userData[user].completed = this.pushIfNotExist (userData[user].completed, updatedTask.id);
    } else {
      // if new status is pending, remove it from completed and push to
      // pending.
      userData[user].completed = userData[user].completed.filter (id => id !== updatedTask.id);
      userData[user].pending = this.pushIfNotExist (userData[user].pending, updatedTask.id);
    }
  },

  /**
   * @description function to push an item into the array
   * if it does not already exist.
   * @param {Arra} list 
   * @param {String} id 
   */
  pushIfNotExist (list, id) {
    let newList = [];
    if (!list.filter (item => item === id).length) {
      newList = list.slice ();
      newList.push (id);
    } else {
      newList = list.slice ();
    }
    return newList;
  },

  /**
   * @description function generates specified number of task.
   * @param {Number} count no of tasks to be generated
   */
  generateTasks (count, user) {
    count = parseInt (count) || 3;
    for (let index = 0; index <  count; index++) {
      const random = Math.floor ((Math.random () * 9) + 1)
      const isCompleted = (index % random) === 0;
      const title = `${isCompleted ? 'DONE': 'PENDING'}: Test title ${index}`;
      const description = `${isCompleted ? 'DONE': 'PENDING'}: Test description ${index}`;
      const req = {
        title,
        description,
        isCompleted 
      }
      this.createTask (user, req);
    }
    return count;
  },
}

module.exports = TASKS;
