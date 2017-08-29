import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import TaskPage from  '../components/TaskPage';
import Form from '../components/Form';
import * as actionCreators from '../actions/task';

class Task extends React.Component {
  componentDidMount() {
    this.props.actions.getTask(this.props.match.params.id);
  }

  render() {
    const { match, actions, task, location, history } = this.props;
    const editable = location.pathname.indexOf('edit') !== -1;

    return (
      <div className="container" >
        {
          editable ?
          (
            <TaskPage
              editable
              update={actions.update.bind(null, match.params.id)}
              task={task}
              history={history}
            />
          )
          :
          (
            <TaskPage
              task={task}
            />
          )
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { task: state.task }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)