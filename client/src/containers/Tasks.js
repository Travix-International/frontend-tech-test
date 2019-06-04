import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import { taskApi } from '../api/api';
import * as actionTypes from '../store/actionTypes';
import TasksHeader from '../components/TasksHeader/TasksHeader';
import TasksList from '../components/TasksList/TasksList';
import TaskDetailsDialog from '../components/TaskDetailsDialog/TaskDetailsDialog';

const Tasks = ({ tasks, selectedTask, setSelectedTask }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [height, setHeight] = useState(0);

  // get tasks on mount
  useEffect(() => {
    taskApi.getTasks();
  }, []);

  // close or open task detail diolog when selected task is changed
  useEffect(() => {
    if (selectedTask) {
      setDialogOpen(true);
    } else {
      setDialogOpen(false);
    }
  }, [selectedTask]);

  // get height of list wrapper for react-window
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <Box display="flex" flexDirection="column" height="100vh" py={2}>
      <TasksHeader onAddTask={setSelectedTask} />
      <Box
        ref={measuredRef}
        component={Paper}
        flexGrow={1}
      >
        <TasksList height={height} tasks={tasks} />
        {
          selectedTask ? <TaskDetailsDialog open={dialogOpen} task={selectedTask} /> : ''
        }
      </Box>
    </Box>
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
