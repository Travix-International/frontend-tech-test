import React from 'react';

class IncompleteTasksComponent extends React.Component {
  constructor(props){
    super(props)
    this.clickMe = this.clickMe.bind(this);
  }

  clickMe(){
    this.props.createTask({id: 1})
  }

  render(){
    return(
      <section>
        Incomplete tasks container
        <div onClick={this.clickMe}>hello</div>
      </section>
    )
  }
}

export default IncompleteTasksComponent
