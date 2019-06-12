import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
  loadTasks,
  createTask,
  getTask,
  editTask,
} from '../../redux/modules/tasks';

import './TaskDialog.scss';

let TaskDialog = ({ dispatch, setOpen, open, isEdit, id, task }) => {
  const isMobile = window.innerWidth <= 600;
  const [state, setState] = useState({
    title: isEdit ? task.title : '',
    description: isEdit ? task.description : '',
    completed: isEdit ? task.completed : false,
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };
  const handleClose = () => {
    setOpen(false);
  }
  const handleClick = () => {
    const promise = isEdit ?
      dispatch(editTask(id, state.title, state.description, state.completed)) :
      dispatch(createTask(state.title, state.description, state.completed));

      promise
        .then(() => {
          dispatch(loadTasks());
          handleClose();
        });
  }

  return open && (
    <Dialog
      className="task-dialog"
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      scroll="body"
      fullWidth
      fullScreen={isMobile}
    >
      <DialogTitle id="alert-dialog-title">
        {isEdit ? 'Edit Task' : 'Add Task'}
      </DialogTitle>
      <DialogContent>
        <form noValidate autoComplete="off">
          <TextField
            id="title"
            label="Title"
            value={state.title}
            onChange={handleChange('title')}
            margin="normal"
            className="text-field title"
          />
          <TextField
            id="description"
            label="Description"
            value={state.description}
            onChange={handleChange('description')}
            margin="normal"
            className="text-field description"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          className="add-button"
          color="secondary"
          variant="contained"
          onClick={handleClick}
        >
          Submit
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

TaskDialog = memo(TaskDialog);
TaskDialog = connect(globalState => ({
  task: getTask(globalState)
}))(TaskDialog);
export default TaskDialog;
