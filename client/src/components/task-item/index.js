import React from 'react';
import types from './../../constants/types';
import { Button, ToggleButton, ToggleItem } from 'travix-ui-kit';
import LABELS from './../../constants/labels';

class TaskItem extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      selectedIndex: 0,
      showDescription: false,
      showUpdateError: false
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
      selectedIndex: data.task.isCompleted ? 0 : 1,
      showUpdateError: (data.errorId === data.task.id) ? data.updateErrorMessage : ''
    });
    setTimeout (() => {
      if (this.state && this.state.showUpdateError) {
        this.setState ({
          showUpdateError: ''
        });
      }
    }, 1100);
  }

  _showDescription () {
    this.setState ({
      showDescription: !this.state.showDescription
    });
  }

  /**
   * @description function to update status of the task.
   * @param {Object} e event data
   * @param {Number} selectedIndex selected action
   */
  _handleSelect (e, selectedIndex){
    const isCompleted = (selectedIndex === 0) ? true : false;
    const { description, title } = this.props.task;
    const task = {
      isCompleted,
      description,
      title
    };
    if (this.state.selectedIndex !== selectedIndex) {
      this.props.toggleStatus (this.props.task.id, task);
    }

  }
    

  render () {
    const { task, isUpdating, updateErrorMessage } = this.props;
    return (
      <div className='relative'>
        <div className={`task-update-error ${this.state.showUpdateError ? 'show-error' : ''}`}>
          { updateErrorMessage }
        </div>
        <div className={`task-item ${isUpdating ? 'disable-events' : ''}`}>
          <div
            onClick={ this._showDescription.bind (this) }
            className='task-title'
            title='Click to expand'>
            { task.title }
            <span className='help-text'>
              { this.state.showDescription ? 
                  LABELS.TASKS.COLLAPSE_HELP : 
                  LABELS.TASKS.EXPAND_HELP
              }
            </span>
            </div>
          <div className='task-actions'>
            <Button
              onClick={() => {} }
              variation="ghost"
              size="s">Edit
            </Button>
            <ToggleButton
              handleSelect={ this._handleSelect.bind (this) }
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
      </div>
    );
  };
}

TaskItem.propTypes = {
  task: types._task,
  toggleStatus: types._function,
  isUpdating: types._boolean
}

export default TaskItem;

