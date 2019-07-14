const path = require("path");
const http = require("http");
const cors = require("cors");
const express = require("express");
const socketIO = require("socket.io");
const loadTasks = require("./load-tasks");

// middlewares
const checkID = require("./lib/middlewares/check-id");
const checkTitle = require("./lib/middlewares/check-title");
const checkExistence = require("./lib/middlewares/check-existence");
const useSocket = require("./lib/middlewares/use-socket");

const staticDir = path.join(__dirname, "client", "build");
const tasksMap = loadTasks("./tasks.json");

const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.set("io", io);

app.use(cors());
app.use(express.json());
app.use(express.static(staticDir));

app.get("/api/tasks", [], (req, res) => {
  return res.status(200).json(Object.values(tasksMap));
});

app.get("/api/tasks/:id", [checkID, checkExistence(tasksMap)], (req, res) => {
  return res.status(200).json(res.locals.currentTask);
});

app.post("/api/tasks", [checkTitle], (req, res) => {
  const id = Math.max(...Object.keys(tasksMap)) + 1;
  const { title, description } = req.body;

  const task = {
    id,
    title,
    description,
    done: false,
  };

  tasksMap[id] = task;

  const io = req.app.get("io");
  io.sockets.emit("task:create", task);

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

    const io = req.app.get("io");
    io.sockets.emit("task:change", currentTask);

    return res.status(200).json(currentTask);
  }
);

app.delete(
  "/api/tasks/:id",
  [checkID, checkExistence(tasksMap)],
  (req, res) => {
    const { currentTask } = res.locals;

    const io = req.app.get("io");
    io.sockets.emit("task:remove", currentTask);

    delete tasksMap[currentTask.id];

    return res.status(204).send();
  }
);

server.listen(9001, () => {
  process.stdout.write("the server is available on http://localhost:9001/\n");
});
