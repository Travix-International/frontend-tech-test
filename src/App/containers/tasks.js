import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TaskCard from  '../presentationals/TaskCard';
import * as actionCreators from '../actions/tasks'

class TasksList extends React.Component {
  listOfTasks(tasks) {

    return tasks.map(function(task, i){
      return (<TaskCard key={i} task={task} />)
    })
  }

  render() {
    const { tasks } = this.props;
    console.log(this.props);
    return (
      <div>
        {this.listOfTasks(tasks || [])}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)