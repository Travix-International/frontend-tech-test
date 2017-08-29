import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';

import TaskCard from  '../components/TaskCard';
import TaskPage from  '../components/TaskPage';
import Form from '../components/Form';
import * as actionCreators from '../actions/tasks'

class TasksList extends React.Component {
  componentWillMount() {
    this.props.actions.getAll();
  }

  listOfTasks(tasks) {
    const { remove } = this.props.actions;

    return tasks.map(function(task, id){
      return (<TaskCard
        key={id}
        task={task}
        onRemove={remove.bind(null, task.id)}
      />)
    })
  }

  render() {
    const { tasks, actions } = this.props;

    return (
      <div className="container" >
        <div className="tasks">
          <Form onEnter={ actions.add }/>
          
          <div className="tasks__container">
            {this.listOfTasks(tasks || [])}
          </div>
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