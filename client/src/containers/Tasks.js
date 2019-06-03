import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { taskApi } from '../api/api';
import * as actionTypes from '../store/actionTypes';
import TaskItem from '../components/TaskItem/TaskItem';
import TaskDetailsDialog from '../components/TaskDetailsDialog/TaskDetailsDialog';

const Tasks = ({ tasks, selectedTask, setSelectedTask }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    taskApi.getTasks();
  }, []);

  useEffect(() => {
    if (selectedTask) {
      setDialogOpen(true);
    } else {
      setDialogOpen(false);
    }
  }, [selectedTask]);

  const onTaskDetailsDialogClose = (task) => {
    if (task) {
      if (task.id) {
        taskApi.updateTask(task);
      } else {
        taskApi.addTask(task.title, task.description);
      }
    }
    setSelectedTask(null);
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh" py={2}>
      <Box m="auto" mb="-28px">
        <Fab aria-label="Add Task" color="primary" id="add-task" onClick={() => setSelectedTask({})}>
          <AddIcon />
        </Fab>
      </Box>
      <Box component={Paper} flexGrow={1} p={2} style={{ overflow: 'scroll' }}>
        <List>
          {
            tasks.map(task => (<TaskItem key={task.id} task={task} />))
          }
        </List>
        {
          selectedTask ? <TaskDetailsDialog onClose={onTaskDetailsDialogClose} open={dialogOpen} task={selectedTask} /> : ''
        }
      </Box>
    </Box >
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  selectedTask: PropTypes.object,
  setSelectedTask: PropTypes.func.isRequired,
};

Tasks.defaultProps = {
  selectedTask: null,
};

const mapStateToProps = state => ({ tasks: state.tasks, selectedTask: state.selectedTask });
const mapDispatchToProps = dispatch => ({
  setSelectedTask: selectedTask => dispatch({ type: actionTypes.SET_SELECT_TASK, selectedTask }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
