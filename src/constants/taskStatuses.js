export const TASK_STATUSES = {
  TODO: 'ToDo',
  DONE: 'Done'
}

export const TASK_STATUSES_LABELS = {
  [TASK_STATUSES.TODO]: 'To Do',
  [TASK_STATUSES.DONE]: 'Done'
}

export const TASK_STATUSES_OPTIONS = [
  {
    value: TASK_STATUSES.TODO,
    label: TASK_STATUSES_LABELS[TASK_STATUSES.TODO]
  },
  {
    value: TASK_STATUSES.DONE,
    label: TASK_STATUSES_LABELS[TASK_STATUSES.DONE]
  }
]
