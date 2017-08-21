import React from 'react';

class TaskCard extends React.Component {
  render() {
    const { task } = this.props;
    return (
      <div>
        {task.content}
      </div>
    )
  }
}

export default TaskCard