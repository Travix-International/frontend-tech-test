import React from 'react';
import PropTypes from 'prop-types';
import {
  SlidingPanel,
  SlidingPanelContent,
  SlidingPanelFooter,
  Input,
  Button,
} from 'travix-ui-kit';

class TaskEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: { title: '', description: '' } };
    this.titleChange = this.titleChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.task !== null)
      return {
        task: nextProps.task,
      };
    if (nextProps.newItem)
      return {
        task: { title: '', description: '' },
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

  saveChanges() {}

  deleteTask() {}

  render() {
    return (
      <SlidingPanel active>
        <SlidingPanelContent>
          <label>
            Title:
            <Input onChange={this.titleChange} value={this.state.task.title} />
          </label>
          <br />
          <label>
            Description:
            <Input
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
          {!this.props.newItem && (
            <Button key="3" onClick={this.deleteTask} size="xs">
              Delete
            </Button>
          )}
        </SlidingPanelFooter>
      </SlidingPanel>
    );
  }
}

TaskEditor.defaultProps = {
  newItem: true,
};

TaskEditor.propTypes = {
  newItem: PropTypes.bool,
};

export default TaskEditor;
