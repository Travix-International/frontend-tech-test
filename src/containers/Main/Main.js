import React from 'react';

import ToolBox from '../ToolBox';
import TaskList from '../TaskList';
import TaskEditor from '../TaskEditor';

import './Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      updatedDate: Date.now(),
      searchParam: '',
    };
    this.handleTaskSelection = this.handleTaskSelection.bind(this);
    this.handleNewTaskAction = this.handleNewTaskAction.bind(this);
    this.handleEditorClose = this.handleEditorClose.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  handleSearch(searchParam) {
    this.setState({
      searchParam: searchParam,
    });
  }

  handleEditorClose() {
    this.setState({
      showEditor: false,
    });
  }

  handleEditorChange() {
    this.setState({
      showEditor: false,
      updatedDate: Date.now(),
    });
  }

  render() {
    return (
      <div className="Main">
        <h1>Best To-Do App</h1>
        <ToolBox
          onAddNewClicked={this.handleNewTaskAction}
          onSearch={this.handleSearch}
        />
        <TaskList
          filterBy={this.state.searchParam}
          handleTaskSelection={this.handleTaskSelection}
          updatedDate={this.state.updatedDate}
        />
        {this.state.showEditor && (
          <TaskEditor
            onChange={this.handleEditorChange}
            onPanelClose={this.handleEditorClose}
            task={this.state.selectedTask}
          />
        )}
      </div>
    );
  }
}

export default Main;
