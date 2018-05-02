export const tasks = [
  {
    id: 1,
    name: 'Task1',
    description: 'Description1',
    status: 'ToDo',
    subTasks: []
  },
  {
    id: 2,
    name: 'Task2',
    description: 'Description2',
    status: 'ToDo',
    subTasks: []
  }
]

export const crudTaskMock = {
  id: 1,
  name: 'Task1',
  description: 'Description1',
  status: 'ToDo',
  subTasks: []
}

export const subTask = {
  id: 10,
  parentId: 1,
  name: 'Subtask1',
  description: 'Subtask description1',
  status: 'ToDo'
}

export const taskWithSubtask = {
  ...crudTaskMock,
  subTasks: [subTask]
}

export const tasksMock = {
  tasks
}
