import React from 'react';
import Form from './Form';
import { Redirect } from 'react-router-dom';

class TaskPage extends React.Component {
  
  renderNonEditable(task) {
    return(
      <div className="details">
        <h3 className="details__header">Your task details</h3>
        <div className="details__element">
          <span className="label">Title</span>
          <span className="info">{ task.title }</span>
        </div>
        <div className="details__element">
          <span className="label">Description</span>
          <span className="info">{ task.description }</span>
        </div>
      </div>
    )
  }

  renderEditable(update, task, history) {
    return <Form onEnter={ update } task={task} history={history}/>
  }

  render() {
    const {editable, update, task, history } = this.props; 
    const view = editable ? this.renderEditable(update, task, history) : this.renderNonEditable(task);

    return (
      <div className="task">
        { view }
      </div>
    )
  }
}

export default TaskPage