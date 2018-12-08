import React from 'react';
import types from './../../constants/types';
import { Button, ToggleButton, ToggleItem } from 'travix-ui-kit';

class TaskItem extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      selectedIndex: 0,
      showDescription: false
    }
  }

  componentDidMount () {
    this._updateState (this.props);
  }

  componentWillReceiveProps (nextProps) {
    this._updateState (nextProps);
  }

  _updateState (data) {
    this.setState ({
      selectedIndex: data.task.isCompleted ? 0 : 1
    });
  }

  _showDescription () {
    this.setState ({
      showDescription: !this.state.showDescription
    });
  }

  render () {
    const { task } = this.props;
    return (
      <div className='task-item'>
        <div
          onClick={ this._showDescription.bind (this) }
          className='task-title'
          title='Click to expand'>{ task.title }</div>
        <div className='task-actions'>
          <Button
            onClick={() => {} }
            variation="ghost"
            size="s">Edit
          </Button>
          <ToggleButton
            handleSelect={ (e, selectedIndex) => this.setState({ selectedIndex }) }
            selectedIndex={ this.state.selectedIndex }
          >
            <ToggleItem>
              Done
            </ToggleItem>
            <ToggleItem>
              Pending
            </ToggleItem>
          </ToggleButton>
        </div>
        <div 
          className={`task-description ${this.state.showDescription ? 'show-task-description' : ''}`}>
          { task.description }
        </div>
      </div>
    );
  };
}

TaskItem.propTypes = {
  task: types._task,
  updateTask: types._function
}

export default TaskItem;

