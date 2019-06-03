import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TaskDetailsDialog = ({
  fullScreen, onClose, open, task,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTitle(task.title || '');
    setDescription(task.description || '');
  }, [task]);

  return (
    <Dialog
      aria-labelledby="task-details-dialog"
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      onClose={() => onClose()}
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
        <Button
          id="cancel-save-task"
          onClick={() => onClose()}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          disabled={!title || !description}
          id="save-task"
          onClick={() => onClose({ ...task, title, description })}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

TaskDetailsDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  task: PropTypes.object.isRequired,
};

export default withMobileDialog({ breakpoint: 'xs' })(TaskDetailsDialog);
