import Http from './http.js';

export default class TodosService {
  static getTodos() {
    return Http.request({
      method: 'get',
      url: '/tasks'
    }).then(res => {
      return res.tasks;
    }).catch(err => {
      throw new Error(err);
    });
  }

  static addTodo({ title, description }) {
    return Http.request({
      method: 'post',
      url: `/task/create/${title}/${description}`
    }).then(res => {
      return res.task;
    }).catch(err => {
      throw new Error(err);
    });
  }

  static updateTodo({ id, title, description, isDone }) {
    return Http.request({
      method: 'put',
      url: `/task/update/${id}/${title}/${description}/${isDone}`
    }).then(res => {
      return res.task;
    }).catch(err => {
      throw new Error(err);
    });
  }

  static deleteTodo(id) {
    return Http.request({
      method: 'delete',
      url: `/task/delete/${id}`
    }).then(res => {
      return res.id;
    }).catch(err => {
      throw new Error(err);
    });
  }
}