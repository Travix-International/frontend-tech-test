const serverUrl = 'http://localhost:9001';

//POST
export const postRequest = (reqUrl, data) => {
  const url = serverUrl + reqUrl;
  return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Origin': 'http://localhost',
        'Content-Type': 'application/json'
      }
  }).then(checkStatus);
};

//PUT
export const putRequest = (reqUrl) => {
  const url = serverUrl + reqUrl;
  return fetch(url, {
      method: 'PUT',
      headers: {
        'Origin': 'http://localhost'
      }
  }).then(checkStatus);
};

//GET
export const getRequest = (reqUrl) => {
  const url = serverUrl + reqUrl;
  return fetch(url, {
      headers: (new Headers()).append('Origin', 'http://localhost')
  }).then(checkStatus);
};

//DELETE
export const deleteRequest = (reqUrl, id) => {
  const url = serverUrl + reqUrl;
  return fetch(url, {
      method: 'DELETE',
      headers: {
        'Origin': 'http://localhost'
      }
  }).then(checkStatus);
};


const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    //error.response = response;
    throw error;
  }
}