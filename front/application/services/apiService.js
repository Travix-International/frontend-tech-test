const API_URL = '/api'

function throwError(response) {
  throw new Error(response.statusText)
}

async function callApi(method, dataUrl) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  const response = await fetch(
    `${API_URL}/${dataUrl}`, {
    headers,
    method
  })

  if (response.status >= 200 && response.status < 300) {
    return throwError(response)
  }

  return response.json()
}

export default callApi
