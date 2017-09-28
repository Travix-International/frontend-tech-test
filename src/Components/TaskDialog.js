import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import { ConnectedTodoForm } from './index';

class TaskDialog extends React.Component {
  handleCancel() {
    this.props.onCancel();
  }

  handleOk() {
    this.props.onAccept();
  }

  handleEntering() {

  }

  render() {
    const { selectedTask, open } = this.props;

    return (
      <Dialog
        maxWidth="xs"
        onEntering={() => this.handleEntering()}
        onRequestClose={() => this.handleCancel()}
        open={open}
      >
        <DialogTitle>Task</DialogTitle>
        <DialogContent>
          <ConnectedTodoForm selectedTask={selectedTask} />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => this.handleCancel()}>
            Cancel
          </Button>
          <Button color="primary" onClick={() => this.handleOk()}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

TaskDialog.propTypes = {
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  selectedTask: PropTypes.object,
  open: PropTypes.bool,
};

export default TaskDialog;
