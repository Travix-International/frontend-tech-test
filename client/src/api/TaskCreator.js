export default class TaskCreator {
  constructor(fetchApi) {
    this.url = 'http://localhost:9001/task'
    this.fetchApi = fetchApi || require('isomorphic-fetch')
  }

  create(data) {
    const options = this._buildOptions(data)
    const url = this._buildUrl(data)
    return this.fetchApi(url, options)
               .then((response) => {
                 return response.json()
               })
  }

  _buildOptions() {
    return {
      method: 'POST'
    }
  }

  _buildUrl({ title, description }) {
    return `${this.url}/create/${title}/${description}`
  }
}
