import axios from 'axios';

export const requester = axios.create({
  baseURL: 'http://localhost:9001'
});

export const validateId = id => {
  return typeof id === 'string' && /^td_\w*/.test(id);
}

export const getTasks = async () => {
  return await requester.get('/tasks');
};

export const getTaskById = async (id) => {
  if (!validateId(id)) throw new Error('The value of id is invalid.');
  return await requester.get(`/task/${id}`);
}

export const addTask = async (title = 'todo', description = 'todo') => {
  return await requester.post(`/task/create/${title}/${description}`);
};

export const toggleTask = async id => {
  if (!validateId(id)) throw new Error('The value of id is invalid.');
  return await requester.put(`/task/toggle/${id}`);
}; 

export const updateTask = async (
  id, 
  title = 'todo', 
  description = 'todo'
) => {
  if (!validateId(id)) throw new Error('The value of id is invalid.');
  return await requester.put(`/task/update/${id}/${title}/${description}`);
};

export const deleteTask = async (id) => {
  if (!validateId(id)) throw new Error('The value of id is invalid.');
  return await requester.delete(`/task/delete/${id}`);
};