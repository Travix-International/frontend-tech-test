import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import * as actionTypes from '../../store/actionTypes';

export const TasksHeader = ({ setSelectedTask }) => (
  <Box border={1} borderRadius={16} my={4} pt={3} style={{ textAlign: 'center' }}>
    <Typography color="textSecondary" component="h2" gutterBottom variant="h2">
      tasks
    </Typography>
    <Box m="auto" mb="-28px">
      <Fab aria-label="Add Task" color="primary" id="add-task" onClick={() => setSelectedTask({})}>
        <AddIcon />
      </Fab>
    </Box>
  </Box>
);

TasksHeader.propTypes = {
  setSelectedTask: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setSelectedTask: selectedTask => dispatch({ type: actionTypes.SET_SELECT_TASK, selectedTask }),
});

export default connect(null, mapDispatchToProps)(TasksHeader);
