const apiURL = process.env.NODE_API_URL;
const jsonHeaders = { 'Content-Type': 'application/json' };

const handleResponse = function(response) {
  const contentType = response.headers.get('content-type');
  const isJson = contentType && contentType.indexOf('application/json') !== -1;
  return Promise.all([
    isJson ? response.json() : Promise.resolve(),
    Promise.resolve(response.status),
    Promise.resolve(response.headers)
  ])
  .then(([body, statusCode, headers]) => {
    return Promise.resolve({
      body,
      statusCode,
      headers
    });
  });
};

const http = {
  get: (path) => fetch(`${apiURL}${path}`, { method: 'get' }).then(handleResponse),
  post: (path, body) => fetch(`${apiURL}${path}`, { method: 'post', headers: jsonHeaders, body: JSON.stringify(body) }).then(handleResponse),
  put: (path, body) => fetch(`${apiURL}${path}`, { method: 'put', headers: jsonHeaders, body: JSON.stringify(body) }).then(handleResponse),
  delete: (path) => fetch(`${apiURL}${path}`, { method: 'delete' }).then(handleResponse),
};

export default http;
