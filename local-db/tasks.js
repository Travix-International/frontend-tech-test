const TASK_TYPE = require ('../constants/task-type').TASK;
const labels = require ('../constants/labels');
const crypto = require ('crypto');

/**
 * An object to hold all tasks, where the key is the id and
 * the value is the task object.
 */
let allTasks = {};

/**
 * An array that contains the list of task ids.
 */
let index = [];

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
   * @description function to get all tasks.
   */
  getAllTasks (page, limit) {
    let start = (page - 1) * limit,
        end = page * limit;
    return this.convertToArray (start, end);
  },

  convertToArray (start, end) {
    let tempArr = [];
    for (let count = start; count < end; count++) {
      let task = allTasks[index[count]];
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
        index.push (id);

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
        index = index.filter (taskId => taskId !== id);
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
   * @description function generates specified number of task.
   * @param {Number} count no of tasks to be generated
   */
  generateTasks (count) {
    count = parseInt (count) || 3;
    console.log (count);
    for (let index = 0; index <  count; index++) {
      const random = Math.floor ((Math.random () * 9) + 1)
      const req = {
        'description': `Test description ${index}`,
        'isCompleted': (index % random) === 0
      }
      this.createTask (req);
    }
    return count;
  },
}

module.exports = TASKS;
