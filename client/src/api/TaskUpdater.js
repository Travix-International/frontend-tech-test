export default class TaskUpdater {
  constructor(fetchApi) {
    this.url = 'http://localhost:9001/task'
    this.fetchApi = fetchApi || require('isomorphic-fetch')
  }

  update(payload) {
    const options = this._buildOptions(payload)
    const url = this._buildUrl(payload)
    return this.fetchApi(url, options)
               .then((response) => {
                 return Promise.resolve(true)
               })
  }

  _buildOptions() {
    return {
      method: 'PUT'
    }
  }

  _buildUrl({ id, title, description }) {
    return `${this.url}/update/${id}/${title}/${description}`
  }
}
