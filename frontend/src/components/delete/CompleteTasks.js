import React from 'react';
import Task from './PresentationalComponents/TaskComponent'

class CompleteTasks extends React.Component {
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

  parseCompleteTasks(){

    return this.props.tasks.map((task, index) => {
      return(
        <Task todo={task} clickHandler={this.handleClick(task)} key = {index} handleDeleteClick={this.handleDelete(task)}/>
      )
    })
  }

  render(){
    return(
      <section>
        Complete Tasks
        <ul>
          {this.parseCompleteTasks()}
        </ul>
      </section>
    )
  }
}

export default CompleteTasks
