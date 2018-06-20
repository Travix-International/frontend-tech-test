export const createTask = ({ title, description }) => ({
  type: 'CREATE_TASK',
  title,
  description,
});