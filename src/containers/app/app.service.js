import api from '../../utils/api';
// service requests
export const getTaskServie = (filter) => api().get('/tasks',{params: {filter}});

export const createTaskServie = (task) => api().post('/task/create',task);

export const editTaskServie = (task) => api().put(`/task/update/${task.id}`,task);


export const deleteTaskServie = (task) => api().delete(`/task/delete/${task.id}`);