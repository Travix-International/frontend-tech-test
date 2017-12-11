// Using proxy set in package.json
const API_URL = ''

function Fetch(method, path) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  return fetch(`${API_URL}/${path}`, { headers, method })
    .then((res) => res.status <= 200 && res.status > 300 ? res.statusText : res)
    .then(res => res.json())
    .catch(res => res)
}

export default Fetch
