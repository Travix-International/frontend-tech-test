const path = require("path");
const express = require("express");
const loadTasks = require("./load-tasks");

// middlewares
const checkID = require("./middlewares/check-id");
const checkTitle = require("./middlewares/check-title");
const checkExistence = require("./middlewares/check-existence");

const app = express();
app.use(express.json());

const staticDir = path.join(__dirname, "client", "build");
app.use(express.static(staticDir));

const tasksMap = loadTasks("./tasks.json");

app.get("/api/tasks", (req, res) => {
  return res.status(200).json(Object.values(tasksMap));
});

app.get("/api/tasks/:id", [checkID, checkExistence(tasksMap)], (req, res) => {
  return res.status(200).json(res.locals.currentTask);
});

app.post("/api/tasks", checkTitle, (req, res) => {
  const id = Math.max(...Object.keys(tasksMap)) + 1;
  const { title, description } = req.body;

  const task = {
    id,
    title,
    description,
  };

  tasksMap[id] = task;

  return res.status(201).json(task);
});

app.put(
  "/api/tasks/:id",
  [checkID, checkExistence(tasksMap), checkTitle],
  (req, res) => {
    const { currentTask } = res.locals;
    const { title, description, done } = req.body;

    currentTask.title = title;
    currentTask.description = description;
    currentTask.done = done;

    return res.status(200).json(currentTask);
  }
);

app.delete(
  "/api/tasks/:id",
  [checkID, checkExistence(tasksMap)],
  (req, res) => {
    delete tasksMap[res.locals.currentTask.id];

    return res.status(204).send();
  }
);

app.listen(9001, () => {
  process.stdout.write("the server is available on http://localhost:9001/\n");
});
