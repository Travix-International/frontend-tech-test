const fs = require('fs');

const storageFile = process.env.STORAGE_FILE || './tasks.json';

const utils = {};

/**
 * Write tasks array to json file.
 * @param  {Array} tasks - Tasks array
 * @return {undefined}
 */
utils.writeTasks = (tasks) => {
  const json = JSON.stringify({ tasks: tasks });
  fs.writeFileSync(storageFile, json, 'utf8');
};

/**
 * Read tasks array from json file.
 * @return {Object} - Read tasks
 */
utils.readTasks = () => {
  const json = fs.readFileSync(storageFile);
  return JSON.parse(json).tasks;
};

module.exports = utils;
