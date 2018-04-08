import React from 'react';

import ToolBox from '../ToolBox';
import TaskList from '../TaskList';
import TaskEditor from '../TaskEditor';
import Paging from '../../components/Paging';

import './Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEditor: false, selectedTask: null };
    this.handleTaskSelection = this.handleTaskSelection.bind(this);
    this.handleNewTaskAction = this.handleNewTaskAction.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleNewTaskAction() {
    this.setState({
      showEditor: true,
      selectedTask: null,
    });
  }

  handleTaskSelection(task) {
    this.setState({
      showEditor: true,
      selectedTask: task,
    });
  }

  handlePageChange(page) {
    this.setState({
      currentPage: page,
    });
  }

  render() {
    return (
      <div className="Main">
        <h1>Best To-Do App</h1>
        <ToolBox onAddNewClicked={this.handleNewTaskAction} />
        <TaskList handleTaskSelection={this.handleTaskSelection} />
        <Paging
          currentPage={1}
          onPageClicked={this.handlePageChange}
          totalPage={100}
        />
        {this.state.showEditor && (
          <TaskEditor
            newItem={this.state.selectedTask === null}
            task={this.state.selectedTask}
          />
        )}
      </div>
    );
  }
}

export default Main;
