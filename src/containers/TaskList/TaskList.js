import React from 'react';

import TaskItem from '../../components/TaskItem';
import './TaskList.scss';
import { tasks } from '../../../tasks.json';

class TaskList extends React.Component {
  render() {
    const taskUi = tasks.map(task => (
      <TaskItem task={task} />
    ));
    return <div className="TaskList__wrapper">{taskUi}</div>;
  }
}

export default TaskList;
