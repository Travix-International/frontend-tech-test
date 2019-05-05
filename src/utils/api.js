import axios from 'axios';

const _api = axios.create({
  baseURL: 'http://localhost:9001'
});

export const validateId = id => {
  return typeof id === 'string' && /^td_\w*/.test(id);
}

export const getTasks = async () => {
  return await _api.get('/tasks');
};

export const getTaskById = async (id) => {
  if (!validateId(id)) throw new Error('The value of id is invalid.');
  return await _api.get(`/task/${id}`);
}

export const addTask = async (title = 'todo', description = 'todo') => {
  console.log(`/task/create/${title}/${description}`)
  return await _api.post(`/task/create/${title}/${description}`);
};

export const toggleTask = async (id, completed = false) => {
  if (!validateId(id)) throw new Error('The value of id is invalid.');
  return await _api.put(`/task/update/${id}/${completed}`);
}; 

export const updateTask = async (
  id, 
  title = 'todo', 
  description = 'todo'
) => {
  if (!validateId(id)) throw new Error('The value of id is invalid.');
  return await _api.put(`/task/update/${id}/${title}/${description}`);
};

export const deleteTask = async (id) => {
  if (!validateId(id)) throw new Error('The value of id is invalid.');
  return await _api.delete(`/task/delete/${id}`);
};