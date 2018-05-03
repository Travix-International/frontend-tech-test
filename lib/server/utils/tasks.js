import axios from 'axios';

/* Helper to get tasks using GET API */
export const fetchTasks = async () => {
  const requestURL = `${process.env.HOST}:${process.env.PORT}`;
  const response = await axios.get(`${requestURL}/api/tasks`);
  return response.data;
};
