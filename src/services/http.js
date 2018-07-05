import axios from 'axios';

export default class Http {
  static request(options) {
    return new Promise((resolve, reject) => {
      axios({...options}).then(res => {
        if (res.status < 400) resolve(res.data);
        else reject(res.data.message);
      });
    });
  }
  
  static get(options) {
    return Http.request({ ...options, method: 'get' });
  }

  static post(options) {
    return Http.request({ ...options, method: 'post' });
  }

  static put(options) {
    return Http.request({ ...options, method: 'put' });
  }

  static delete(options) {
    return Http.request({ ...options, method: 'delete' });
  }
}