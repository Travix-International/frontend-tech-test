"use strict";

const path = require("path");
const app = require("express")();
const bodyParser = require('body-parser');
const tasksContainer = require("./tasks.json");
app.disable('etag'); //don't send 304 in json response

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./webpack.config");
app.use(bodyParser.json());
const compiler = webpack(config);

// comment this part when using yarn run test command

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      builtAt: false,
      children: false,
      colors: true,
      modules: false,
    },
  })
);


app.use(require('webpack-hot-middleware')(compiler));

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get("/tasks", (req, res) => {
  return res.status(200).json(tasksContainer);
});


/**
 * Get /task/:id
 *
 * id: Number
 *
 * Return the task for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get("/task/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);
    if (task) {
      return res.status(200).json({
        task,
      });
    }
    return res.status(404).json({
      message: "Not found.",
    });
  }
  return res.status(400).json({
    message: "Bad request.",
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

/**
 * PUT /task/update/:id/:title/:description
 *
 * id: Number
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put("/task/update/:id/:title/:description", (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task) {
      task.title = req.params.title;
      task.description = req.params.description;
      return res.status(204);
    }
    return res.status(404).json({
      message: "Not found",
    });
  }
  return res.status(400).json({
    message: "Bad request",
  });
});

/**
 * POST /task/create/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post("/task/create/:title/:description", (req, res) => {
  const task = {
    id: tasksContainer.tasks.length,
    title: req.params.title,
    description: req.params.description,
  };

  tasksContainer.tasks.push(task);

  return res.status(201).json({
    message: "Resource created",
  });
});

/**
 * DELETE /task/delete/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete("/task/delete/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);

    if (task) {
      const taskIndex = task.id;
      tasksContainer.tasks.splice(taskIndex, 1);
      return res.status(200).json({
        message: "Updated successfully",
      });
    }
    return res.status(404).json({
      message: "Not found",
    });
  }
  return res.status(400).json({
    message: "Bad request",
  });
});

const port = 9001;
app.listen(port, () => console.log(`TODO app started on port ${port}`));
// Exporting the app module
module.exports = app;