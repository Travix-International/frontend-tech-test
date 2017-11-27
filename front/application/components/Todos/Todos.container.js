import Todos from './Todos'
import { observe, streamProps } from 'frint-react'

import { getTasks } from 'application/reducers/task/getTasksReducer'
import { createTask } from 'application/reducers/task/createTaskReducer'
import { deleteTask } from 'application/reducers/task/deleteTaskReducer'
import { editTask } from 'application/reducers/task/editTaskReducer'

export default observe(app => (
  streamProps({})
    .set( app.get('store').getState$(), state => ({ tasks: state.task.tasks }) )
    .setDispatch({ getTasks, createTask, deleteTask, editTask }, app.get('store'))
    .get$()
))(Todos)
