import React from 'react';
import Task from './PresentationalComponents/TaskComponent'

class IncompleteTasksComponent extends React.Component {
  constructor(props){
    super(props)
    // this.clickMe = this.clickMe.bind(this);
  }
  //
  // clickMe(){
  //   this.props.createTask({id: 1, title: 'hello', description: 'why hello there'})
  // }

  parseIncompleteTasks(){
    return this.props.incompleteTasks.map((task, index) => {
      return(
        <Task todo={task} key = {index}/>
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
