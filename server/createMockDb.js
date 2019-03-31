/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("../tasks.json");
const  tasks= mockData.tasks;
const data = JSON.stringify({tasks});
const filepath = path.join(__dirname, "db.json");
fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock Database for JSON Server created.");
});
