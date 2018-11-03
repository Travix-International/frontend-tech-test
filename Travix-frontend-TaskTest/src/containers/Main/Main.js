import React from 'react';

import TravixtoolBox from '../TravixtoolBox';
import TravixtaskList from '../TravixtaskList';
import TravixtaskEditor from '../TravixtaskEditor';

import './Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      currentDate: Date.now(),
      searchParam: '',
    };
    this.openselectedTask = this.openselectedTask.bind(this);
    this.createNewTask = this.createNewTask.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
    this.changeinEditor = this.changeinEditor.bind(this);
    this.handleInputSearch = this.handleInputSearch.bind(this);
  }

  createNewTask() {
    
    this.setState({
      showEditor: true,
      selectedTask: {},
    });
  }

  openselectedTask(task) {
    this.setState({
      showEditor: true,
      selectedTask: task,
    });
  }

  handleInputSearch(searchParam) {
    this.setState({
      searchParam: searchParam,
    });
  }

  closeEditor() {
    this.setState({
      showEditor: false,
    });
  }

  changeinEditor() {
    this.setState({
      showEditor: false,
      updatedDate: Date.now(),
    });
  }

  render() {
    return (
      <div className="Main">
        <span className="txt-align"><h1>Travix Task App</h1></span>
        <TravixtoolBox
          addNewClick={this.createNewTask}
          searchClick={this.handleInputSearch}
        />
        <TravixtaskList
          filterBy={this.state.searchParam}
          handleTaskSelection={this.openselectedTask}
          updatedDate={this.state.currentDate}
        />
        {this.state.showEditor && (
          <TravixtaskEditor
            onChange={this.changeinEditor}
            onPanelClose={this.closeEditor}
            task={this.state.selectedTask} editmodalstate={this.state.showEditor}
          />
        )}
        <div className="myname">
          <h4>By Hardik Amlani</h4>
          <h4>M:-+971525144699  E:-hhamlani89@gmail.com</h4>
        </div> 
      </div>
    );
  }
}

export default Main;
