import { TodoRepository } from "../../infrastructure";
import { TodoListPresenter } from "../presenter/TodoListPresenter";
import * as io from "socket.io-client";

const socket = io.connect('http://localhost:3001');

export class TodoApplicationService {

  private todoRepository: TodoRepository;

  constructor(private presenter: TodoListPresenter) {
    this.todoRepository = new TodoRepository();
    socket.on('TodoChanged', async () => {
      const todoList = await this.todoRepository.fetchList();
      this.presenter.update(todoList);
    });
  }


  async init() {
    this.presenter.startLoading();
    try {
      const todoList = await this.todoRepository.fetchList();
      this.presenter.init(todoList);
    } catch (e) {
      this.presenter.failed();
    }
  }


  async addNewTodo(title: string) {
    try {
      await this.todoRepository.addNew(title);
    } catch (e) {
      this.presenter.failed();
    }
  }

  async editTodo(id: string, title: string) {
    try {
      await this.todoRepository.updateTitle(id, title);
    } catch (e) {
      this.presenter.failed();
    }
  }

  async deleteTodo(id: string) {
    try {
      await this.todoRepository.delete(id);
    } catch (e) {
      this.presenter.failed();
    }
  }

  async changeDoneState(id: string, newState: boolean) {
    try {
      await this.todoRepository.update(id, newState);
    } catch (e) {
      this.presenter.failed();
    }
  }
}
