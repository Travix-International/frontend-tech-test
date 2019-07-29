import axios from 'axios';
import api from '../config';

/**
 * Base API class. This Class is not for direct usage.
 * Extend your model class from API class.
 */
class API {
  constructor(config = {}) {
    this.config = {
      ...{
        domain: api.domain,
        port: api.port,
        version: api.version,

        url: {
          base: null
        }
      },
      ...config
    };

    this.config.url.base = API.createBaseUrl(this.config.domain, this.config.port, this.config.version);
    this.params = null;
    this.path = null;
    this.axiosObject = null;
  }

  /**
   * Initialize api axios config. Merges user prefered config with default configs.
   *
   * @param {object} [params={}]
   */
  init(params = {}) {
    this.params = {
      ...{
        baseURL: this.config.url.base,
        timeout: 5000
      },
      ...params
    };

    this.params.headers = {
      ...{
        'Content-Type': 'application/json'
      },
      ...params.headers
    };
  }

  /**
   * Make http request.
   *
   * @param {string} path - Request route (/{resource})
   * @param {string} [method="GET"] - Request http methods (GET|POST|PUT|...)
   * @param {object} [params={}] - Query params
   * @param {object} [data={}] - Request body
   *
   * @return {object} - Response object
   */
  async request(path, method = 'GET', params = {}, data = {}) {
    this.params.url = path;
    this.params.method = method;
    this.params.data = data;
    this.axiosObject = axios.create(this.params);

    const result = await this.axiosObject
      .request({
        method,
        url: path,
        params
      })
      .then(
        response => ({
          status: 'success',
          data: response.data,
          response
        }),
        error => ({
          status: 'success',
          data: error.response,
          response: error.response
        })
      );

    return result;
  }

  /**
   * Create base url of the api.
   *
   * @param {string} [domain="http://localhost"] - Api domain
   * @param {number} [port=80] - Api port
   * @param {null\|number} [version=null] - Api version
   *
   * @return {string} - Request base url
   */
  static createBaseUrl(domain = 'http://localhost', port = 80, version = null) {
    return version ? `${domain}:${port}/v${version}/` : `${domain}:${port}/`;
  }
}

export default API;
