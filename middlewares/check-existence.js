function checkExistence(tasksMap) {
  return function(req, res, next) {
    const task = tasksMap[res.locals.id];

    if (!task) {
      return res.status(404).json({ message: "Not found" });
    }

    res.locals.currentTask = task;
    return next();
  };
}

module.exports = checkExistence;
