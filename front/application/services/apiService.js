const API_URL = '/api'

function throwError(response) {
  throw new Error(response.statusText)
}

function apiService(method, dataUrl) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  return fetch(
      `${API_URL}/${dataUrl}`, {
      headers,
      method
    })
    .then((response) => {
      if (response.status <= 200 && response.status > 300) {
        return throwError(response)
      }
      return response
    })
    .then((response) => response.json())
}

export default apiService
