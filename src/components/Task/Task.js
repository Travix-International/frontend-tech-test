import React from 'react'

import ButtonDelete from '../ButtonDelete/ButtonDelete'
import { IconEdit } from '../../icons'
import EditTask from '../EditTask/EditTask'
import './Task.css'

const Item = ({id, title, description, editingTask, editTask, deleteTask}) => (
  <li className="task-item">
    <h3 className="task-title">
      <span onClick={() => editTask(id)}>
        <IconEdit width="18px" height="18px" />
      </span>

      <span>{title}</span>

      <ButtonDelete deleteTask={deleteTask} id={id}>X</ButtonDelete>
    </h3>

    <p className="task-description">{description}</p>

    {editingTask === id
      && <EditTask id={id} title={title} description={description} /> }

  </li>
)

export default Item
