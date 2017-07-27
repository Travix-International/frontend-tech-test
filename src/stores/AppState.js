import { observable, action, computed } from "mobx";
import axios from "axios";

// Todo Model
class Todo {
  @observable title;
  @observable completed;

  constructor(title) {
    this.title = title;
    this.completed = false;
  }
}
// Application State
export default class AppState {
  @observable tasks;
  @observable task;

  @computed get completedTasks() {
    return this.tasks.filter(task => !task.completed)
  }

  @observable newTaskTitle;

  constructor() {
    this.tasks = [];
    this.task = {};
    this.newTaskTitle = '';
  }

  @action setTasks(data) {
    this.tasks = data;
  }

  @action setSingleTask(data) {
    this.task = data;
  }

  @action clearTasks() {
    this.tasks = [];
    this.task = {};
  }

  async fetchTasks() {
    let { data } = await axios.get(
      `http://localhost:3080/tasks`
    );
    data.length > 0 ? this.setTasks(data) : '';
  }

  @action async createNewTask(title) {
    let { data } = await axios.post(
      `http://localhost:3080/tasks/`, {
        title: title,
        completed: false
      }
    );
    this.fetchTasks();
  }

  @action async deleteTask(id) {
    let { data } = await axios.delete(
      `http://localhost:3080/tasks/${id}`
    );
    let tasks = this.tasks;
    tasks = tasks.filter((el) => {return el.id !== id;});
    this.tasks = tasks;
    this.fetchTasks();
  }

  @action async completehTask(task) {
    let { data } = await axios.patch(
      `http://localhost:3080/tasks/${task.id}`, {
        completed: task.completed
      }
    );
  }

  @action async ChangeTaskTitle(task, value) {
    let { data } = await axios.patch(
      `http://localhost:3080/tasks/${task.id}`, {
        title: value
      }
    );
    this.fetchTasks();
  }

}
