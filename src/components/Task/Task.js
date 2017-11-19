import React from 'react'
import ButtonDelete from '../ButtonDelete/ButtonDelete'
import { IconEdit } from '../../icons'
import './Task.css'
import EditTask from '../EditTask/EditTask'

const Item = ({id, title, description, editingTask, editTask, deleteTask}) => (
  <li>
    <h3 className="task-title">
      <span onClick={() => editTask(id)}>
        <IconEdit width="18px" height="18px" />
        </span>
      {title}
      <ButtonDelete deleteTask={deleteTask} id={id}>Delete</ButtonDelete>
    </h3>

    <p className="task-description">{description}</p>

    {editingTask === id
      && <EditTask id={id} title={title} description={description} /> }

  </li>
)

export default Item
