import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IntlMessages from 'util/IntlMessages';



class FormDialog extends React.Component {
  state = {
    open: false,
    title: "",
    description: ""
  };

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  handleAddTodo = () => {
    this.props.onSubmit({completed: false,
      deleted: false,
      important: false,
      labels: [],
      notes: this.state.description,
      selected: false,
      starred: false,
      startDate: null,
      title: this.state.title,
      user: 1});
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <Button variant="contained" className="bg-primary text-white" onClick={this.handleClickOpen}><IntlMessages id="todo.addTask"/></Button>
        <Dialog open={this.state.open} onClose={this.handleRequestClose}>
          <DialogTitle>ADD TO DO</DialogTitle>
          <DialogContent>
            <DialogContentText>
              In order to use dashboard you should add your task and then JUST Do IT :)
            </DialogContentText>
            <TextField
              onChange={(evt) => this.setState({title: evt.target.value})}
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              fullWidth
            />
            <TextField
             onChange={(evt) => this.setState({description: evt.target.value})}
             multiline
             rows={3}
             margin="dense"
             id="des"
             label="Description"
             fullWidth/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="secondary">
              CANCLE
            </Button>
            <Button onClick={this.handleAddTodo} color="primary">
              ADD
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FormDialog;