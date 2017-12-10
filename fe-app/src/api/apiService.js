import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9001/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

/**
 * apiService
 *
 * Ensures axios gets isolated from app logic preventing possible swap, also
 * attempts to simplify interaction with the api
 *
 */
const apiService = {
  get(endpoint) {
    return axios.get(endpoint);
  },
  post(endpoint, data) {
    return axios.post(endpoint, data);
  },
  put(endpoint, data) {
    return axios.put(endpoint, data);
  },
  destroy(endpoint) {
    return axios.delete(endpoint);
  },
};

export default apiService;
