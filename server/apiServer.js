const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

// Can pass a limited number of options to this to override (some) defaults. See https://github.com/typicode/json-server#api
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(function(req, res, next) {
  setTimeout(next, 0);
});

// server.use((req, res, next) => {
//   if (req.method === "POST") {
//     req.body.createdAt = Date.now();
//   }
//   next();
// });

server.post("/task/", function(req, res, next) {
  const error = validateTask(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    next();
  }
});

server.use(router);

// Start server
const port = 9009;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

//Validate task Function
function validateTask(task) {
  if (!task.title) return "Task Title is required";
  if (!task.description) return "Description is required.";
  return "";
}