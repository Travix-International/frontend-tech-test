const TASK_CONST = require ('../constants/task-type');
const labels = require ('../constants/labels');
const crypto = require ('crypto');

const TASK_TYPE = TASK_CONST.TASK;
const LIMIT = TASK_CONST.LIMIT;

/**
 * An object to hold all tasks, where the key is the id and
 * the value is the task object.
 */
let allTasks = {};

/**
 * An array that contains the list of task ids all.
 */
let all = [];


/**
 * An array that contains the list of task ids of completed tasks.
 */
let completed = [];


/**
 * An array that contains the list of task ids of pending tasks.
 */
let pending = [];

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

  /**
   * @description function to get all data for the initialisation
   * of application.
   * @param {Number} count no of items to be fetched in first request.
   */
  getAppData (count) {
    count = count || LIMIT;
    return {
      tasks: this.convertToArray (0, count),
      allCount: all.length,
      doneCount: completed.length,
      pendingCount: pending.length
    }
  },
  /**
   * @description function to get all tasks.
   * @param {Number} page current page number
   * @param {Number} limit no of items to be retrieved
   * @param {String} type of task to be retrieved.
   * @return {Array}
   */
  getAllTasks (page, limit, type) {
    let start = (page - 1) * limit,
        end = page * limit;
    return {
      tasks: this.convertToArray (start, end, type)
    };
  },

  /**
   * @description function to extract the objects for the given ids of the array.
   * @param {Number} start index for the array.
   * @param {Number} end index for the array.
   * @param {String} type of task to be fetched.
   */
  convertToArray (start, end, type) {
    let tempArr = [],
        thisList = [];
    if (!type) {
      thisList = all;
    } else {
      if (type === 'C') {
        thisList = completed
      } else {
        thisList = pending;
      }
    }
    for (let count = start; count < end; count++) {
      let task = allTasks[thisList[count]];
      if (task) {
        tempArr.push (task);
      }
    }
    return tempArr;
  },

  /**
   * @description function to create a task.
   * @param {Object} task to be created.
   * @return {Object} created task.
   */
  createTask (task) {
    try {
      if (typeOfInputIsTask (task)) {
        const id = 'T-' + crypto.randomBytes(11).toString('hex');

        const createdTask = {
          id,
          ...task,
          createdAt: Date.now (),
          lastUpdatedAt: Date.now ()
        }
        
        allTasks [id] = createdTask;
        this.createIndex (createdTask);

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
   * @param {Object} task object
   */
  createIndex (task) {
    all.push (task.id);
    if (task.isCompleted) {
      completed.push (task.id)
    } else {
      pending.push (task.id)
    }
  },

  /**
   * @description function to return task content for the
   * given id.
   * @param {String} id of the task
   */
  findById (id) {
    return allTasks[id];
  },
  
  /**
   * @description function to delete a task.
   * @param {String} id of the task
   */
  deleteById (id) {
    try {
      delete allTasks[id];
      
      // asynchronously remove the id from the index array.
      setTimeout (() => {
        this.
        all = all.filter (taskId => taskId !== id);
        completed = completed.filter (taskId => taskId !== id);
        pending = pending.filter (taskId => taskId !== id);
      }, 0);

      return true;
    } catch (e) {
      return false;
    }
  },

  /**
   * @description function to update task.
   * @param {String} id of the task to be updated. 
   * @param {Object} task object
   */
  updateTask (id, task) {
    try {
      if (typeOfInputIsTask (task)) {
        const thisTask = allTasks[id];
        if (!thisTask) {
          throw new Error (`${labels.TASK_NOT_FOUND} ${id}`)
        }
        for (let key in task) {
          thisTask[key] = task[key];
        }
        thisTask ["lastUpdatedAt"] = Date.now ();
        this.updateIndex (thisTask);
        return {
          status: 1,
          message: labels.TASK_UPDATED,
          task: thisTask
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
   * @param {Object} updatedTask task object.
   */
  updateIndex (updatedTask) {
    // if new status is completed, remove it from pending and push to
    // completed.
    if (updatedTask.isCompleted) {
      pending = pending.filter (id => id !== updatedTask.id);
      completed = this.pushIfNotExist (completed, updatedTask.id);
    } else {
      // if new status is pending, remove it from completed and push to
      // pending.
      completed = completed.filter (id => id !== updatedTask.id);
      pending = this.pushIfNotExist (pending, updatedTask.id);
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
    if (!list.filter (item => item.id).length) {
      newList = list.slice ();
      newList.push (id);
    }
    return newList;
  },

  /**
   * @description function generates specified number of task.
   * @param {Number} count no of tasks to be generated
   */
  generateTasks (count) {
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
      this.createTask (req);
    }
    return count;
  },
}

module.exports = TASKS;
