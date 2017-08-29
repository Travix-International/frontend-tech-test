import React from 'react';
import { Link, Route } from 'react-router-dom';
import TaskPage from  '../components/TaskPage';

class TaskCard extends React.Component {
  render() {
    const { task, onRemove } = this.props;

    return (
      <div className="task_card">
        <div className="task_card__content">
          <Link to={`/task/${task.id}`} >
            {task.title}
          </Link>
        </div>
        <div className="task_card__controls">
          <Link to={`/task/${task.id}/edit`} className="btn btn--edit">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </Link>

          <button className="btn btn--remove" type="button" onClick={onRemove}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default TaskCard