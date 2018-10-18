'use strict';
const wsServer = require('ws').Server;
const tasksContainer = require('../data/tasks.json');
const ERROR = require('./enums').ERROR;

class WebSocketServer {
  constructor() {
    this.wss = null;
    this.connections = [];
    this.connCounter = 0;
  }

  createWebSocketServer(server) {
    this.wss = new wsServer({
      server: server,
      clientTracking: true
    });
    console.log("WebSocket Server Created!!");
    this.wss.on('connection', this.onConnection.bind(this));
  }

  onConnection(ws) {
    ws.connectionId = this.connCounter++;
    this.connections.push(ws);
    this.attachListeners(ws);
    this.sendMessage({
      type: "connectionSuccess",
      connectionId: ws.connectionId
    }, ws.connectionId);
    console.log("new connection created:: ", ws.connectionId);
  }

  attachListeners(ws) {
    ws.on('message', this.onMessage.bind(this));
    ws.on('close', this.handleConnectionClose.bind(this));
  }

  onMessage(msg) {
    var data = JSON.parse(msg);

    if (data.connectionId == undefined) {
      return false;
    }
    switch (data.type) {
      case 'ready':
        this.sendMessage({
          type: "tasklist",
          value: {
            tasks: tasksContainer.tasks
          }
        }, data.connectionId);
        break;
      case 'add':
        this.addTask(data.value, data.connectionId);
        break;
      case 'update':
        this.updateTask(data.value, data.connectionId);
        break;
      case 'delete':
        this.deleteTask(data.value.taskId, data.connectionId);
        break;
      case 'complete':
        this.completeTask(data.value, data.connectionId);
      default:
        break;
    }
  }

  handleConnectionClose() {
    console.log("Connection Closed" + this.wss.clients.size);
    for (var i = 0; i < this.connections.length; i++) {
      if (!this.wss.clients.has(this.connections[i])) {
        this.connections.splice(i, 1);
      }
    }
  }

  sendMessage(data, id) {
    var isBroadCastMsg = id == undefined ? true : false;
    var dataString = typeof data === "object" ? JSON.stringify(data) : data;
    if (typeof dataString !== "string") {
      return false;
    }
    if (isBroadCastMsg) {
      for (var i = 0; i < this.connections.length; i++) {
        this.connections[i].send(dataString);
      }
    } else {
      var connection = this.connections.find(item => item.connectionId === id);
      connection.send(dataString);
    }
  }

  addTask(newTask, connId) {
    try {
      const task = {
        id: tasksContainer.tasks.length,
        text: newTask.text,
        completed: false
      };
      tasksContainer.tasks.push(task);
      this.sendMessage({
        type: "addsuccess",
        value: {
          task: task
        }
      });
    } catch (error) {
      this.sendMessage({
        type: "addfail",
        value: {
          error: ERROR.addFail
        }
      }, connId);
      console.log("ADD TASK FAIL >> ", error);
    }
  }

  updateTask(update, connId) {
    const task = tasksContainer.tasks.find(item => item.id === update.id);
    if (task) {
      task.text = update.text;

      this.sendMessage({
        type: "updatesuccess",
        value: {
          task: task
        }
      });
    } else {
      this.sendMessage({
        type: "updatefail",
        value: {
          error: ERROR.updateFail
        }
      }, connId);
      console.log("UPDATE TASK FAIL >> task not found");
    }
  }

  deleteTask(taskId, connId) {
    const taskIndex = tasksContainer.tasks.findIndex(item => item.id === taskId);
    if (taskIndex > -1) {
      tasksContainer.tasks.splice(taskIndex, 1);
      this.sendMessage({
        type: "deletesuccess",
        value: {
          taskId: taskId
        }
      });
    } else {
      this.sendMessage({
        type: "deletefail",
        value: {
          error: ERROR.deleteFail
        }
      }, connId);
      console.log("DELETE TASK FAIL >> task not found");
    }
  }

  completeTask(completionTask, connId) {
    const task = tasksContainer.tasks.find(item => item.id === completionTask.id);
    if (task) {
      task.completed = completionTask.completed;
      this.sendMessage({
        type: "completesuccess",
        value: {
          taskId: completionTask.id
        }
      });
    } else {
      this.sendMessage({
        type: "comepletefail",
        value: {
          error: ERROR.comepleteFail
        }
      }, connId);
      console.log("COMPLETE TASK FAIL >> task not found");
    }
  }
}

module.exports = new WebSocketServer();