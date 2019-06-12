import axios from 'axios';

const LOAD_TASKS = 'LOAD_TASKS';
const LOAD_TASKS_FULFILLED = 'LOAD_TASKS_FULFILLED';
const LOAD_TASKS_REJECTED = 'LOAD_TASKS_REJECTED';

const CREATE_TASK = 'CREATE_TASK';
const CREATE_TASK_FULFILLED = 'CREATE_TASK_FULFILLED';
const CREATE_TASK_REJECTED = 'CREATE_TASK_REJECTED';

const LOAD_TASK = 'LOAD_TASK';
const LOAD_TASK_FULFILLED = 'LOAD_TASK_FULFILLED';
const LOAD_TASK_REJECTED = 'LOAD_TASK_REJECTED';

const EDIT_TASK = 'EDIT_TASK';
const EDIT_TASK_FULFILLED = 'EDIT_TASK_FULFILLED';
const EDIT_TASK_REJECTED = ' EDIT_TASK_REJECTED';

const DELETE_TASK = 'DELETE_TASK';
const DELETE_TASK_FULFILLED = 'DELETE_TASK_FULFILLED';
const DELETE_TASK_REJECTED = ' DELETE_TASK_REJECTED';

const server = 'http://localhost:3000';

const initialState = {
  loaded: false,
  loading: false,
  tasks: [],
  task: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_TASKS:
    case CREATE_TASK:
    case LOAD_TASK:
    case EDIT_TASK:
    case DELETE_TASK:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case LOAD_TASKS_FULFILLED:
      return {
        ...state,
        loading: false,
        loaded: true,
        tasks: action.payload.tasks,
      };
    case CREATE_TASK_FULFILLED:
      return {
        ...state,
        loading: false,
        loaded: true,
        tasks: action.payload.tasks,
      };
    case LOAD_TASK_FULFILLED:
      return {
        ...state,
        loading: false,
        loaded: true,
        task: action.payload.task,
      };
    case DELETE_TASK_FULFILLED:
      return {
        ...state,
        loading: false,
        loaded: true,
        tasks: action.payload.tasks,
      };
    case EDIT_TASK_FULFILLED:
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    case LOAD_TASK_REJECTED:
    case LOAD_TASKS_REJECTED:
    case CREATE_TASK_REJECTED:
    case EDIT_TASK_REJECTED:
    case DELETE_TASK_REJECTED:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function getTasks(globalState) {
  return globalState.tasks || [];
}
export function getTask(globalState) {
  return globalState.task || null;
}

export function loadTasks() {
  return {
    type: LOAD_TASKS,
    payload: () => {
      return axios.get(`${server}/api/tasks`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        })
        .then(response => response.data)
        .catch(error => error)
    }
  }
}

export function loadTask(id) {
  return {
    type: LOAD_TASK,
    payload: () => {
      return axios.get(`${server}/api/tasks/${id}`, {
          headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
          },
        })
        .then(response => response.data)
        .catch(error => error)
    }
  }
}

export function createTask(title, description, completed) {
  return {
    type: CREATE_TASK,
    payload: () => {
      return axios.post(`${server}/api/tasks`,
        JSON.stringify({ title, description, completed }), {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      .then(response => response.data)
      .catch(error => error)
    }
  }
}

export function editTask(id, title, description, completed) {
  return {
    type: EDIT_TASK,
    payload: () => {
      return axios.put(`${server}/api/tasks/${id}`,
        JSON.stringify({ title, description, completed }), {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        })
        .then(response => response.data)
        .catch(error => error)
    }
  }
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: () => {
      return axios.delete(`${server}/api/tasks/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        })
        .then(response => response.data)
        .catch(error => error)
    }
  }
}
