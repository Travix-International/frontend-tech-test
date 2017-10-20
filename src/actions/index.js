let nextTodoId = 0
export const addTodo = (title, description) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    title,
    description
  }
}

export const removeTodo = id => {
    return {
      type: 'REMOVE_TODO',
      id
    }
  }