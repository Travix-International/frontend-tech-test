const todoState = state => state.todos

export const currentPage = state => todoState(state).page
