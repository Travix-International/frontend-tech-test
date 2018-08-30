import React from 'react';
import Task from './PresentationalComponents/TaskComponent'

class CompleteTasks extends React.Component {
  constructor(props){
    super(props)
    // this.clickMe = this.clickMe.bind(this);
  }
  //
  // clickMe(){
  //   this.props.createTask({id: 1, title: 'hello', description: 'why hello there'})
  // }

  parseCompleteTasks(){

    return this.props.completeTasks.map((task, index) => {
      return(
        <Task todo={task} key = {index}/>
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
