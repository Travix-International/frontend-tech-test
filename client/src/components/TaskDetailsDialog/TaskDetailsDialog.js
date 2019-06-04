import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteOutline';

import { taskApi } from '../../api/api';
import * as actionTypes from '../../store/actionTypes';

export const TaskDetailsDialog = ({
  fullScreen, open, task, setSelectedTask,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // anytime task is changed set title and description with new data
  useEffect(() => {
    setTitle(task.title || '');
    setDescription(task.description || '');
  }, [task]);

  // on task detail dialog is closed either create, update or delete task and selected task as null
  const onCloseHandler = (editedTask, isDelete) => {
    if (editedTask) {
      if (isDelete) {
        taskApi.deleteTask(editedTask.id);
      } else if (task.id) {
        taskApi.updateTask(editedTask);
      } else {
        taskApi.addTask(editedTask.title, editedTask.description);
      }
    }
    setSelectedTask(null);
  };

  return (
    <Dialog
      aria-labelledby="task-details-dialog"
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      onClose={() => onCloseHandler()}
      open={open}
    >
      <DialogTitle id="task-details-dialog">{task.id ? 'Update Task' : 'Create Task'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          id="task-title"
          label="Title"
          margin="normal"
          onChange={event => setTitle(event.target.value)}
          type="text"
          value={title}
        />
        <TextField
          fullWidth
          id="task-description"
          label="Description"
          margin="normal"
          multiline
          onChange={event => setDescription(event.target.value)}
          type="text"
          value={description}
        />
      </DialogContent>
      <DialogActions>
        {task.id
          ? (
            <IconButton aria-label="Delete Task" id="delete-task" onClick={() => onCloseHandler({ ...task }, true)}>
              <DeleteRoundedIcon color="error" fontSize="small" />
            </IconButton>
          ) : ''
        }
        <Button
          id="cancel-save-task"
          onClick={() => onCloseHandler()}
        >
          Cancel
        </Button>
        <Button
          color="secondary"
          disabled={!title || !description}
          id="save-task"
          onClick={() => onCloseHandler({ ...task, title, description })}
          variant="outlined"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

TaskDetailsDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  task: PropTypes.object.isRequired,
  setSelectedTask: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setSelectedTask: selectedTask => dispatch({ type: actionTypes.SET_SELECT_TASK, selectedTask }),
});
export default connect(null, mapDispatchToProps)(withMobileDialog({ breakpoint: 'xs' })(TaskDetailsDialog));
