const setTasks = (payload) => {
  const tasks = payload.tasks.sort((a, b) => {
    return b.id - a.id
  })

  return {
    type: 'SET_TASKS',
    payload: { tasks }
  }
}

export default setTasks
