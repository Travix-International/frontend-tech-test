import axios from 'axios';

export const create = (task) => {
  return axios
    .post(`/api/tasks/`, task)
    .then(response => response.data);
};

export const update = (_id, updates) => {
  return axios
    .patch(`/api/tasks/${_id}`, updates)
    .then(response => response.data);
};

export const remove = (_id) => {
  return axios
    .delete(`/api/tasks/${_id}`)
    .then(response => response.data);
};