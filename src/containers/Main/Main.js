import React from 'react';

import ToolBox from '../ToolBox';
import TaskList from '../TaskList';
import TaskEditor from '../TaskEditor';

import './Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEditor: false };
    this.handleTaskSelection = this.handleTaskSelection.bind(this);
    this.handleNewTaskAction = this.handleNewTaskAction.bind(this);
    this.handleEditorClose = this.handleEditorClose.bind(this);
  }

  handleNewTaskAction() {
    this.setState({
      showEditor: true,
      selectedTask: {},
    });
  }

  handleTaskSelection(task) {
    this.setState({
      showEditor: true,
      selectedTask: task,
    });
  }

  handleEditorClose() {
    this.setState({
      showEditor: false,
    });
  }

  render() {
    return (
      <div className="Main">
        <h1>Best To-Do App</h1>
        <ToolBox onAddNewClicked={this.handleNewTaskAction} />
        <TaskList handleTaskSelection={this.handleTaskSelection} />
        {this.state.showEditor && (
          <TaskEditor
            onPanelClose={this.handleEditorClose}
            task={this.state.selectedTask}
          />
        )}
      </div>
    );
  }
}

export default Main;
