function buildUrl(parameters){
  let qs = '';
  for(const key in parameters) {
    const value = parameters[key];
    qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
  }

  if (qs.length > 0) {
    qs = qs.substring(0, qs.length-1);
  }

  return qs;
}

const ajaxClient = (url, method = 'GET', body = null) => {
  if(method === 'GET') {
    // Forcing null "body" for GET requests
    body = null;
  }

  if(body) {
    body = buildUrl(body);
  }

  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    method,
    body
  }).then(response => {
      if(response.ok) {
        return response.json();
      }

      throw new Error('Request failed');
    });
};

export default ajaxClient;