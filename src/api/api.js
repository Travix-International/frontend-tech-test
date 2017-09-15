const API_ENDPOINT = '/api/';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

export const parseJSON = response => response.text()
  .then(text => (
    text ? JSON.parse(text) : {}
  ));

const encodeQueryString = (params) => {
  const keys = Object.keys(params);
  if (keys.length === 0) {
    return '';
  }

  return `?${keys.map(
    key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  ).join('&')}`;
};

const fetchApi = (method, resource, body, queryString = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  return fetch(
    `${API_ENDPOINT}${resource}${encodeQueryString(queryString)}`, {
      body: JSON.stringify(body),
      credentials: 'include',
      headers,
      method
    })
    .then(checkStatus)
    .then(parseJSON);
};

export default fetchApi;
