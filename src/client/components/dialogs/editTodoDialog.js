import React from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {
  updateEditTodoDialogTitle,
  updateEditTodoDialogDescription,
  closeEditTodoDialog,
  updateTodo
} from '../../store/actions/index';

import '../../content/styles/components/dialogs.scss';

class EditTodoDialog extends React.Component {
  constructor(props) {
    super(props);

    this.confirmUpdate = this.confirmUpdate.bind(this);
    this.close = this.close.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  updateTitle(e) {
    var title = e.target.value;

    this.props.onUpdateEditTodoDialogTitle(title);
  }

  updateDescription(e) {
    var description = e.target.value;

    this.props.onUpdateEditTodoDialogDescrition(description);
  }

  confirmUpdate() {
    this.props.onUpdateTodo();
  }

  close() {
    this.props.onCloseEditDialog();
  }
 
  render() {  
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.close}
      />,
      <FlatButton
        label="Update"
        primary={true}
        onClick={this.confirmUpdate}
      />,
    ];

  	return (
      <Dialog
            actions={actions}
            modal={false}
            open={this.props.isOpen}
            className="edit-todo-dialog"
            onRequestClose={this.close} >       
        <TextField
          floatingLabelText="Todo title"          
          className="todo-title-input"
          value={this.props.title}
          onChange={this.updateTitle}
          fullWidth={true}
        /><br/>
        <TextField
          floatingLabelText="Todo description"
          className="todo-descrition-input"
          multiLine={true}
          rows={3}
          value={this.props.description}
          onChange={this.updateDescription}
          fullWidth={true}
        />
      </Dialog>   	
  	);
 	}
};

var mapStateToProps = (state) => {
  return {
    title: state.ui.dialogs.editTodo.todo.title,
    description: state.ui.dialogs.editTodo.todo.description,
    isOpen: state.ui.dialogs.editTodo.isOpen,
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
  	onUpdateEditTodoDialogTitle: (title) => {
  		dispatch(updateEditTodoDialogTitle(title));
  	},
    onUpdateEditTodoDialogDescrition: (description) => {
      dispatch(updateEditTodoDialogDescription(description));
    },
    onUpdateTodo: () => {
      dispatch(updateTodo());
    },
    onCloseEditDialog: () => {      
      dispatch(closeEditTodoDialog());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoDialog);