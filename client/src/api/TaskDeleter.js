export default class TaskDeleter {
  constructor(fetchApi) {
    this.url = 'http://localhost:9001/task'
    this.fetchApi = fetchApi || require('isomorphic-fetch')
  }

  delete(payload) {
    const options = this._buildOptions()
    const url = this._buildUrl(payload)
    return this.fetchApi(url, options)
               .then((response) => {
                 return Promise.resolve(true)
               })
  }

  _buildOptions() {
    return {
      method: 'DELETE'
    }
  }

  _buildUrl({ id }) {
    return `${this.url}/delete/${id}`
  }
}
