const express = require("express");
const loadTasks = require("./load-tasks");

// middlewares
const checkID = require("./middlewares/check-id");
const checkExistence = require("./middlewares/check-existence");

const app = express();
app.use(express.json());

const tasksMap = loadTasks("./tasks.json");

app.get("/tasks", (req, res) => {
  return res.status(200).json(Object.values(tasksMap));
});

app.get("/tasks/:id", [checkID, checkExistence(tasksMap)], (req, res) => {
  return res.status(200).json(res.locals.currentTask);
});

app.put(
  "/tasks/:id/:title/:description",
  [checkID, checkExistence(tasksMap)],
  (req, res) => {
    const { currentTask } = res.locals;
    currentTask.title = req.params.title;
    currentTask.description = req.params.description;

    return res.status(204).send();
  }
);

app.post("/tasks/:title/:description", (req, res) => {
  const newID = Object.keys(tasksMap).length;

  const task = {
    id: newID,
    title: req.params.title,
    description: req.params.description,
  };

  tasksMap[newID] = task;

  return res.status(201).json({
    message: "Resource created",
  });
});

app.delete("/tasks/:id", [checkID, checkExistence(tasksMap)], (req, res) => {
  delete tasksMap[res.locals.currentTask.id];

  return res.status(200).json({
    message: "Deleted successfully",
  });
});

app.listen(9001, () => {
  process.stdout.write("the server is available on http://localhost:9001/\n");
});
