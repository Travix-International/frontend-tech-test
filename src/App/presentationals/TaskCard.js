import React from 'react';

class TaskCard extends React.Component {
  editTask(e) {
    if(e.key === 'Enter') {
      e.preventDefault();
      this.props.onEdit(e.target.value)
    }
  }

  render() {
    const { task, onEdit, onRemove, makeEditable, toggleDone } = this.props;
    return (
      <div className="task_card">
        <div className="task_card__content">
          
          { task.editable === false?
            (<span
              onClick={toggleDone}
              style= {{
                textDecoration: task.done ? 'line-through' : 'none'
              }}
            >
              {task.content}
            </span>)
            :
            (<input type="text" defaultValue={task.content} onKeyUp={this.editTask.bind(this)} />)
          }

        </div>
        <div className="task_card__controls">
          <button className="btn btn--edit" type="button" onClick={makeEditable}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </button>

          <button className="btn btn--remove" type="button" onClick={onRemove}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default TaskCard