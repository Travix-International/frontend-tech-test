const path = require('path');
const file = process.env.FILE || 'tasks.json';

module.exports = require(path.resolve(file));
