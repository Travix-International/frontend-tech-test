import 'whatwg-fetch';
export default class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  
  fetchData = (url, opts) => fetch(url, {
    mode: "cors",
    ...opts
  })
  
  getItems = tag => {
    const tagName = tag ? `?tag=${tag}` : '';
    return this.fetchData(`${this.baseUrl}/tasks${tagName}`);
  }

  getItem = id => {
    return this.fetchData(`${this.baseUrl}/task/${id}`);
  }

  createItem = data => {
    return this.fetchData(`${this.baseUrl}/task`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });
  }

  editItem = data => {
    return this.fetchData(`${this.baseUrl}/task/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });
  }

  deleteItem = id => {
    return this.fetchData(`${this.baseUrl}/task/${id}`, {
      method: "DELETE"
    });
  }
}