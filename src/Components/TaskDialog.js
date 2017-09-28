import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class TaskDialog extends React.Component {
  constructor() {
    super();
    this.titleFieldValue = '';
    this.descriptionFieldValue = '';
  }

  handleCancel(evt) {
    evt.preventDefault();
    this.props.onCancel();
  }

  handleOk(evt) {
    evt.preventDefault();
    const { onAccept, selectedTask } = this.props;

    onAccept({
      id: selectedTask ? selectedTask.id : null,
      titleValue: this.titleFieldValue.trim(),
      descriptionValue: this.descriptionFieldValue.trim()
    });
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
          <form
            autoComplete="off"
            className="todo-form"
            noValidate
            onSubmit={(...args) => this.addTodo(...args)}
          >
            <TextField
              defaultValue={selectedTask ? selectedTask.title : ''}
              label="Title"
              name="title"
              onChange={(e) => { this.titleFieldValue = e.target.value; }}
              placeholder="Add todo title"
              type="text"
            />
            <TextField
              defaultValue={selectedTask ? selectedTask.description : ''}
              label="Description"
              multiline
              name="description"
              onChange={(e) => { this.descriptionFieldValue = e.target.value; }}
              placeholder="Add todo description"
              rowsMax="4"
              type="text"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={evt => this.handleCancel(evt)}>
            Cancel
          </Button>
          <Button color="primary" onClick={evt => this.handleOk(evt)}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

TaskDialog.propTypes = {
  addTodo: PropTypes.func,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  selectedTask: PropTypes.object,
  open: PropTypes.bool,
};

export default TaskDialog;
