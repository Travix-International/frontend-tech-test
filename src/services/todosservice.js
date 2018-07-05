import Http from './http.js';

export default class TodosService {
  static getTodos() {
    return Http.get({ url: '/task' }).then(res => {
      return res.tasks;
    }).catch(err => {
      throw new Error(err);
    });
  }

  static addTodo(task) {
    return Http.post({
      url: '/task/',
      data: task
    }).then(res => {
      return res.task;
    }).catch(err => {
      throw new Error(err);
    });
  }

  static updateTodo({ id, ...task }) {
    return Http.put({
      url: `/task/${id}/`,
      data: task
    }).then(res => {
      return res.task;
    }).catch(err => {
      throw new Error(err);
    });
  }

  static deleteTodo(id) {
    return Http.delete({ url: `/task/${id}` }).then(res => {
      return res.id;
    }).catch(err => {
      throw new Error(err);
    });
  }
}