import React from "react";

import Widget from "components/Widget";

import TaskItem from "./TaskItem";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

  
class RecentTaskList extends React.Component {
  state = {
    value: 0,
  };


  handleChange = (event, value) => {
    this.setState({value});
  };
  onChange = (data, index) => {
  };

  render() {
    const{todos} = this.props
    const {value} = this.state;
    return (
      <Widget>
        <div className="d-flex flex-row">
          <h4 className="mb-0">Recent Tasks</h4>
         
        </div>
        <div className="jr-tabs-classic">
          <Tabs className="jr-tabs-up" value={value} onChange={this.handleChange} centered>
            <Tab className="jr-tabs-label" label="All"/>
            <Tab className="jr-tabs-label" label="Starred"/>
          </Tabs>
          <div className="jr-tabs-content jr-task-list">
            {value === 0 && todos && todos.all.map((task, index) => <TaskItem key={index} data={task} onChange={this.onChange}/>)}
            {value === 1 && todos && todos.starred.map((task, index) => <TaskItem key={index} data={task} onChange={this.onChange}/>)}
          </div>
        </div>
      </Widget>
    );
  }
}


export default RecentTaskList;
