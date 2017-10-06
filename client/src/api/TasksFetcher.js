export default class TasksFetcher {
  constructor(fetchApi) {
    this.url = 'http://localhost:9001/tasks'
    this.fetchApi = fetchApi || require('isomorphic-fetch')
  }

  fetch() {
    return this.fetchApi(this.url)
               .then((response) => {
                 return response.json()
               })
  }
}
