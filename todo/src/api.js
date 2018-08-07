export default class Api {
  baseUrl = "localhost:9001"; 
  getItems() {
    return fetch(`${this.baseUrl}/tasks`);
  }

  getItem(id) {
    return fetch(`${this.baseUrl}/task/${id}`);
  }

  createItem(data) {
    return fetch(`${this.baseUrl}/task`, {
      method: "GET",
      body: data
    });
  }

  editItem(id, data) {
    return fetch(`${this.baseUrl}/task/${id}`, {
      method: "PUT",
      body: data
    });
  }

  deleteItem(id) {
    return fetch(`${this.baseUrl}/task/${id}`);
  }
}