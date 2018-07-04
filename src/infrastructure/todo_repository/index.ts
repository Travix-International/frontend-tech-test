import { Todo } from "../../domain";
import * as io from "socket.io-client";
const socket = io.connect('http://localhost:3001');

export class TodoRepository {

  async fetch(id: string): Promise<Todo> {
    let todoList: Todo[] = [];
    this.load().then(d => todoList = d);    
    const todo = todoList.find(t => t._id === id);
    if (todo) {
      return todo;
    } else {
      return Promise.reject(`id:${id} is not found.`);
    }
  }

  async fetchList(): Promise<Todo[]> {
    return this.load();
  }

  async addNew(title: string, description?: string, done = false): Promise<Todo> {
    const newTodo: any = {
      title,
      done
    }
    this.save(newTodo);
    return newTodo;
  }

  async update(id: string, newState: boolean): Promise<any> {
    let todoList: Todo[] = [];
    await this.load().then(d => todoList = d);    
    const todo = todoList.find(t => t._id === id);
    if (todo) {
      todo.done = newState;
      socket.emit('updateTodo', todo);
      return Promise.resolve();
    } else {
      return Promise.reject(`id:${id} is not found.`);
    }
  }

  async updateTitle(id: string, title: string): Promise<any> {
    let todoList: Todo[] = [];
    await this.load().then(d => todoList = d);
    const todo = todoList.find(t => t._id === id);
    if (todo) {
      todo._id = id 
      todo.title = title;
      socket.emit('updateTodo', todo);
      return Promise.resolve();
    } else {
      return Promise.reject(`id:${id} is not found.`);
    }
  }

  async delete(id: string): Promise<any> {
    socket.emit('deleteTodo', id);
    return Promise.resolve();
  }

  private save(todo: Todo) {
    socket.emit('addTodo', todo);
  }

  private load(): Promise<Todo[]> {
    const apiUrl = "http://localhost:3001/api/";
     return fetch(apiUrl)
     .then(response => response.json())
     .then((data: any) => {
       return data.todos;
     })
  }
}