import React from 'react';
import Task from './PresentationalComponents/TaskComponent'

class IncompleteTasksComponent extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }


  handleClick = (task) => () => {
    this.props.selectOrCreateTask(task);
  }

  handleDelete = (task) => () =>{
    this.props.deleteTask(task)
  }

  parseIncompleteTasks(){
    return this.props.incompleteTasks.map((task, index) => {
      return(
        <Task todo={task} clickHandler={this.handleClick(task)} key = {index} handleDeleteClick={this.handleDelete(task)}/>
      )
    })
  }

  render(){
    return(
      <section>
        Incomplete Tasks
        <ul>
          {this.parseIncompleteTasks()}
        </ul>
      </section>
    )
  }
}

export default IncompleteTasksComponent
