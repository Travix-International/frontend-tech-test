import axios from 'axios';

const getRequestURL = () => {
  return process.env.NODE_ENV === 'production'
    ? `http://${process.env.HOST}`
    : `${process.env.HOST}:${process.env.PORT}`;
};

/* Helper to get tasks using GET API */
export const fetchTasks = async () => {
  const response = await axios.get(`${getRequestURL()}/api/tasks`);
  return response.data;
};
