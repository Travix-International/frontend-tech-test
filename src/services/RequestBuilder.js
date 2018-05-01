const baseUrl = 'http://localhost:9001/'

export default class RequestBuilder {
  constructor({ method = 'GET', url = '', mode = 'cors', responseType = 'json' } = {}) {
    this.request = {
      method,
      mode,
      responseType,
      url: `${baseUrl}${url}`,
      body: null
    }

    this.transformResponseToType = this.transformResponseToType.bind(this)
  }

  headers(headers) {
    this.request.headers = headers
    return this
  }

  method(method) {
    this.request.method = method.toUpperCase()
    return this
  }

  url(url) {
    this.request.url = `${baseUrl}${url}`
    return this
  }

  queries(queries) {
    this.request.queries = queries
    return this
  }

  body(body) {
    this.request.body = body
    return this
  }

  responseType(responseType) {
    this.request.responseType = responseType
    return this
  }

  send() {
    return this.fetch().then(this.transformResponseToType)
  }

  fetch() {
    this.addParams()
    const { method, mode, url, body } = this.request
    const options = {
      method,
      mode,
      body,
      headers: {
        'content-type': 'application/json'
      }
    }
    const request = new Request(url, options)
    return fetch(request)
  }

  transformResponseToType(response) {
    const { responseType } = this.request
    const action = response[responseType]
    if (!action) {
      return response
    }
    return action.call(response)
  }

  addParams() {
    this.createBody()
    this.addQueryToUrl()
  }

  addQueryToUrl() {
    const { url, queries } = this.request
    if (queries) {
      const query = Object.keys(queries).map(key => `${key}=${queries[key]}`).join('&')
      this.request.url = `${url}?${query}`
    }
  }

  createBody() {
    const { body } = this.request
    if (!body) {
      return
    }
    this.request.body = JSON.stringify(body)
  }
}
