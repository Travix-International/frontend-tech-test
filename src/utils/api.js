import 'whatwg-fetch'

const url = 'http://localhost:1337'
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const parseJSON = response => response.json()

export const loadTasks = () => (
  fetch(`${url}/tasks`, { headers }).then(parseJSON)
)

export const createTask = task => (
  fetch(`${url}/task/create`, {
    headers,
    method: 'POST',
    body: JSON.stringify(task),
  }).then(parseJSON)
)

export const deleteTask = ({ id }) => (
  fetch(`${url}/task/${id}/delete/`, {
    headers,
    method: 'DELETE',
  }).then(parseJSON)
)

export const completeTask = ({ id }) => (
  fetch(`${url}/task/${id}/complete/`, {
    headers,
    method: 'PUT',
  }).then(parseJSON)
)
