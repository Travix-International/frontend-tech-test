import React, { Component } from 'react';
import './Task.css';
import FontAwesome from 'react-fontawesome';

class Task extends Component {

  constructor(props){
    super(props);
    this.state = {
      task: props.task
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
       task: nextProps.task
    });
  }

  setEditable(value){
    let task = Object.assign({}, this.state.task, {});;
    task.isEditable = value;
    this.setState({
      task
    });
  }

  changeTitle(title){
    let task = Object.assign({}, this.state.task, {});;
    task.title = title;
    this.setState({
      task
    });
  }

  changeDescription(description){
    let task = Object.assign({}, this.state.task, {});;
    task.description = description;
    this.setState({
      task
    });
  }

  saveTask(){
    const task = this.state.task;
    this.setEditable(false);
    this.props.saveTask(task);
  }

  deleteTask(){
    const task = this.state.task;
    this.props.deleteTask(task);
  }

  completeTask(){
    let task = Object.assign({}, this.state.task, {});;
    task.isComplete = (task.isComplete === "true" ? "false" : "true");
    this.setState({
      task
    });
    this.props.saveTask(task);
  }

  render() {
    return (
      <div className={'task ' + (this.state.task.isComplete === "true" ? 'completed-task':'')}>
        {
          (() => {
            if(this.state.task.isEditable){
              return (
                <div className="edit-group">
                  <div className="task-operations">
                    <FontAwesome name='trash' className="delete-task-button" onClick={() => this.deleteTask()}/>
                    <FontAwesome name='save' className="save-task-button" onClick={() => this.saveTask()}/>
                  </div>
                  <input type="text" className="edit-input" placeholder="Title" value={this.state.task.title} onChange={event => this.changeTitle(event.target.value)}/>
                  <textarea className="edit-textarea" placeholder="Description" value={this.state.task.description} onChange={event => this.changeDescription(event.target.value)}></textarea>
                </div>
              );
            }else {
              return (
                <div>
                  <div className="task-operations">
                    <FontAwesome name='check' className="complete-task-button" onClick={() => this.completeTask()}/>
                    <FontAwesome name='trash' className="delete-task-button" onClick={() => this.deleteTask()}/>
                    {
                      (() => {
                        if(this.state.task.isComplete !== "true")
                            return (<FontAwesome name='edit' className="edit-task-button" onClick={() => this.setEditable(true)}/>)
                      })()
                    }
                  </div>
                  <div className="task-title">{this.state.task.title}</div>
                  <div className="task-description">{this.state.task.description}</div>
                </div>
              );
            }
          })()
        }
      </div>
    );
  }
}

export default Task;
