const express = require("express");
const tasksContainer = require("./tasks.json");

const checkID = require("./middlewares/check-id");
const checkExistence = require("./middlewares/check-existence");

const app = express();
app.use(express.json());

app.get("/tasks", (req, res) => {
  return res.status(200).json(tasksContainer.tasks);
});

app.get("/tasks/:id", [checkID, checkExistence], (req, res) => {
  const { currentTask } = res.locals;

  return res.status(200).json({
    currentTask,
  });
});

app.put(
  "/tasks/:id/:title/:description",
  [checkID, checkExistence],
  (req, res) => {
    const { currentTask } = res.locals;
    currentTask.title = req.params.title;
    currentTask.description = req.params.description;
    return res.status(204);
  }
);

app.post("/tasks/:title/:description", (req, res) => {
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

app.delete("/tasks/:id", [checkID, checkExistence], (req, res) => {
  const taskIndex = tasksContainer.tasks.indexOf(res.locals.currentTask);

  tasksContainer.tasks.splice(taskIndex, 1);
  return res.status(200).json({
    message: "Updated successfully",
  });
});

app.listen(9001, () => {
  process.stdout.write("the server is available on http://localhost:9001/\n");
});
