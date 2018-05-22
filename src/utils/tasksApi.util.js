import axios from 'axios';

const backend = process.env.EXPRESS_SERVER_BASE_URL;
const axiosInstance = axios.create({
  baseURL: backend,
});

export const load = () => axiosInstance
  .get('/tasks');

export const create = task => axiosInstance
  .post(`/tasks/${task.title}/${task.description}`);

export const update = (task) => axiosInstance
  .put(`/tasks/${task.id}/${task.title}/${task.description}`);

export const remove = id => axiosInstance
  .delete(`/tasks/${id}`);
