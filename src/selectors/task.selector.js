export const getSelectedTask = (state) => {
  const taskId = state.todo.selectedTaskId;
  return taskId != null ? (state.todo.tasks || []).find(v => v.id == taskId) : null;
};