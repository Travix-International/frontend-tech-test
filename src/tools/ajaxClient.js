const ajaxClient = (url, method = 'GET') => {
  return fetch(url, {method})
    .then(response => {
      if(response.ok) {
        return response.json();
      }

      throw new Error('Request failed');
    });
};

export default ajaxClient;