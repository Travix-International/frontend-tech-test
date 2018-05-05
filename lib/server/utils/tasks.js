import axios from 'axios';

const getRequestURL = () => {
  return process.env.NODE_ENV === 'production'
    ? `http://${process.env.HOST}`
    : `${process.env.HOST}:${process.env.PORT}`;
};

/* Helper to get tasks using GET API */
export const fetchTasks = async (count) => {
  let baseURL = `${getRequestURL()}/api/tasks`;
  if (typeof count !== 'undefined') {
    baseURL += `?count=${count}`;
  }
  const response = await axios.get(baseURL);
  return response.data;
};
