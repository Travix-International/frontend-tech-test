function useSocket(io) {
  return function(req, res, next) {
    io.sockets.emit("hahahaha");

    res.locals.socket = {
      broadcast(message, body) {
        io.sockets.emit(message, body);
      },
      send() {
        console.log(arguments);
      },
    };
    next();
  };
}

module.exports = useSocket;
