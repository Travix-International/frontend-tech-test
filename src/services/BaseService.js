import RequestBuilder from './RequestBuilder'

class BaseService {
  constructor() {
    this.request = {
      get: () => this.getRequest('GET'),
      post: () => this.getRequest('POST'),
      put: () => this.getRequest('PUT'),
      del: () => this.getRequest('DELETE')
    }
  }

  getRequest(method) {
    return new RequestBuilder({ method, url: this.path })
  }
}

export default BaseService
