import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

import { taskApi } from '../../api/api';
import * as actionTypes from '../../store/actionTypes';

const TaskItemActions = ({ task, setSelectedTask }) => (
  <>
    <Box pb={1}>
      <IconButton aria-label="Update Task" edge="end" onClick={() => setSelectedTask(task)} size="small">
        <CreateRoundedIcon color="secondary" fontSize="small" />
      </IconButton>
    </Box>
    <Box>
      <IconButton aria-label="Delete Task" edge="end" onClick={() => taskApi.deleteTask(task.id)} size="small">
        <DeleteRoundedIcon color="error" fontSize="small" />
      </IconButton>
    </Box>
  </>
);

TaskItemActions.propTypes = {
  task: PropTypes.object.isRequired,
  setSelectedTask: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setSelectedTask: selectedTask => dispatch({ type: actionTypes.SET_SELECT_TASK, selectedTask }),
});

export default connect(null, mapDispatchToProps)(TaskItemActions);
