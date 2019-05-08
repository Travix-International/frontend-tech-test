import axios from 'axios';

export const requester = axios.create({
  baseURL: 'http://localhost:3001'
});

export const validateId = id => {
  return typeof id === 'string' && /^t_\w*/.test(id);
}

export const getTasks = async () => {
  return await requester.get('/tasks');
};

export const getTaskById = async (id) => {
  if (!validateId(id)) throw new Error('The value of id is invalid.');
  return await requester.get(`/task/${id}`);
}

export const addTask = async (title, description) => {
  return await requester.post('/task/create', { title, description });
};

export const toggleTask = async id => {
  if (!validateId(id)) throw new Error('The value of id is invalid.');
  return await requester.put(`/task/toggle/${id}`);
}; 

export const updateTask = async (
  id, 
  title, 
  description
) => {
  if (!validateId(id)) throw new Error('The value of id is invalid.');
  return await requester.put(`/task/update/${id}`, { title, description });
};

export const deleteTask = async (id) => {
  if (!validateId(id)) throw new Error('The value of id is invalid.');
  return await requester.delete(`/task/delete/${id}`);
};

export const searchTask = async (query) => {
  return await requester.get(`/task/search/${query}`);
};