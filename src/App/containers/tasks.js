import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TaskCard from  '../presentationals/TaskCard';
import Input from '../presentationals/Input';
import * as actionCreators from '../actions/tasks'

class TasksList extends React.Component {

  listOfTasks(tasks) {
    const { remove, edit, makeEditable } = this.props.actions;

    return tasks.map(function(task, id){
      return (<TaskCard
        key={id}
        task={task}
        onRemove={remove.bind(null, id)}
        onEdit={edit.bind(null, id)}
        makeEditable={makeEditable.bind(null, id)}
      />)
    })
  }

  render() {
    const { tasks, actions } = this.props;
    console.log(this.props);
    
    return (
      <div className="tasks">
        <div className="tasks__input">
          <Input onEnter={ actions.add }/>
        </div>
        <div className="tasks__container">
          {this.listOfTasks(tasks || [])}
        </div>
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