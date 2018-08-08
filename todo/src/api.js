export default class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  
  fetchData = (url, opts) => fetch(url, {
    mode: "no-cors",
    ...opts
  })
  
  getItems = () => {
    return this.fetchData(`${this.baseUrl}/tasks`);
  }

  getItem = id => {
    return this.fetchData(`${this.baseUrl}/task/${id}`);
  }

  createItem = data => {
    return this.fetchData(`${this.baseUrl}/task`, {
      method: "GET",
      body: data
    });
  }

  editItem = (id, data) => {
    return this.fetchData(`${this.baseUrl}/task/${id}`, {
      method: "PUT",
      body: data,
      mode: "no-cors"
    });
  }

  deleteItem = id => {
    return this.fetchData(`${this.baseUrl}/task/${id}`);
  }
}