import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchTask } from '../../store/actions/taskActions';
import Task from '../../components/Task/Task';
import Loader from '../../components/UI/Loader/Loader';

const TaskDetails = props => {

  useEffect(() => {
    if(props.match.params.id) {
      props.fetchTask(props.match.params.id);
    }
  }, [])

  return (
    <div>
      {!props.task ? 
        <Loader /> :
        <Task task={props.task} />}
    </div>
  );
}

const mapStateToProps = state => ({
  task: state.task.task
})

export default connect(mapStateToProps, { fetchTask })(TaskDetails);
