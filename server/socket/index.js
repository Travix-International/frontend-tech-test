const readWriteJson = require('../helpers/readWriteJson');

exports = module.exports = function (io) {
  io.on('connection', (socket) => {
    console.log('a user connected');
    readWriteJson.getTasks()
      .then((file) => { socket.emit('initialList', file.tasks); })
      .catch((err) => { console.log(err); });


    socket.on('addTask', (task) => {
      readWriteJson.getTasks()
        .then(tasks => readWriteJson.addTask(task, tasks)
          .then((addedTask) => {
            io.emit('taskAdded', addedTask);
          }))
        .catch((err) => { console.log(err); });
    });

    socket.on('deleteTask', (task) => {
      readWriteJson.getTasks()
        .then(tasks => readWriteJson.deleteTask(task, tasks)
          .then((deletedTask) => {
            io.emit('taskDeleted', deletedTask);
          }))
        .catch((err) => { console.log(err); });
    });

    socket.on('editTask', (task) => {
      readWriteJson.getTasks()
        .then(tasks => readWriteJson.editTask(task, tasks)
          .then((editedTask) => {
            io.emit('taskEdited', editedTask);
          }))
        .catch((err) => { console.log(err); });
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};
