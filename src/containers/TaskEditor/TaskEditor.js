import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  SlidingPanel,
  SlidingPanelContent,
  SlidingPanelFooter,
  Input,
  Button,
} from 'travix-ui-kit';
import { createTask, updateTask, getTask, deleteTask } from './actions';

import './TaskEditor.scss';

class TaskEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: props.task };
    this.titleChange = this.titleChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.slidingPanelRef = React.createRef();
  }

  static getDerivedStateFromProps(nextProps) {
    if (!nextProps.inProgress)
      return {
        task: nextProps.task,
      };
    return null;
  }

  titleChange(event) {
    const title = event.target.value;
    this.setState({
      task: { ...this.state.task, title },
    });
  }

  descriptionChange(event) {
    const description = event.target.value;
    this.setState({
      task: { ...this.state.task, description },
    });
  }

  saveChanges() {
    if (!this.state.task.id) this.props.createTask(this.state.task);
    else this.props.updateTask(this.state.task, () => this.props.onChange());
  }

  deleteTask() {
    this.props.deleteTask(this.state.task.id, () => this.props.onChange());
  }

  render() {
    if (this.props.inProgress) return null;
    return (
      <SlidingPanel
        active
        onClose={this.props.onPanelClose}
        ref={this.slidingPanelRef}
      >
        <SlidingPanelContent>
          <label>
            Title:
            <Input
              onChange={this.titleChange}
              type="text"
              value={this.state.task.title}
            />
          </label>
          <br />
          <label>
            Description:
            <Input
              className="SlidingPanel__description"
              multiline
              onChange={this.descriptionChange}
              value={this.state.task.description}
            />
          </label>
        </SlidingPanelContent>
        <SlidingPanelFooter>
          <Button
            dataAttrs={{ rel: 'close' }}
            key="1"
            size="xs"
            variation="ghost"
          >
            Close
          </Button>
          <Button key="2" onClick={this.saveChanges} size="xs">
            Save
          </Button>
          {this.state.task.id && (
            <Button key="3" onClick={this.deleteTask} size="xs">
              Delete
            </Button>
          )}
        </SlidingPanelFooter>
      </SlidingPanel>
    );
  }
}

TaskEditor.propTypes = {
  createTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onPanelClose: PropTypes.func.isRequired,
  task: PropTypes.shape().isRequired,
  updateTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  if (!ownProps.task.id && state.TaskEditorReducer.task.id > 0)
    return {
      inProgress: state.TaskEditorReducer.inProgress,
      task: state.TaskEditorReducer.task,
    };
  return {
    inProgress: state.TaskEditorReducer.inProgress,
    task: ownProps.task,
  };
};

export default connect(mapStateToProps, {
  createTask,
  updateTask,
  getTask,
  deleteTask,
})(TaskEditor);
