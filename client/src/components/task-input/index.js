import React from 'react';
import { Input } from 'travix-ui-kit';
import LABELS from '../../constants/labels';

class TaskInput extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      title: ''
    }
  }
  render () {
    return (
      <React.Fragment>
        <div className='task-input-container'>
          <Input placeholder={ LABELS.INPUT.PLACEHOLDER } />
        </div>
      </React.Fragment>
    )
  }
}

export default TaskInput;
