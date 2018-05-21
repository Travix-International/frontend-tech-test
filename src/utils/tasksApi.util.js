import axios from 'axios';

const backend = process.env.EXPRESS_SERVER_BASE_URL;
const axiosInstance = axios.create({
  baseURL: backend,
});

export const load = () => axiosInstance
  .get('/tasks')
  .then(response => response.data);

export const create = task => axiosInstance
  .post('/tasks/', task)
  .then(response => response.data);

export const update = (id, updates) => axiosInstance
  .put(`/tasks/${id}`, updates)
  .then(response => response.data);

export const remove = id => axiosInstance
  .delete(`/tasks/${id}`)
  .then(response => response.data);
