import React from 'react';

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
        <li key = {index}>
          <h1>{task.title}</h1>
        </li>
      )
    })
  }

  render(){
    debugger
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
