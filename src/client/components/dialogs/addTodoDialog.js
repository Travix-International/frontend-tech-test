import React from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {
  updateAddTodoDialogTitle,
  updateAddTodoDialogDescription,
  closeAddTodoDialog,
  createTodo
} from '../../store/actions/index';

import '../../content/styles/components/dialogs.scss';

class AddTodoDialog extends React.Component {
  constructor(props) {
    super(props);

    this.confirmAdd = this.confirmAdd.bind(this);
    this.close = this.close.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  updateTitle(e) {
    var title = e.target.value;

    this.props.onUpdateAddTodoDialogTitle(title);
  }

  updateDescription(e) {
    var descrition = e.target.value;

    this.props.onUpdateAddTodoDialogDescrition(descrition);
  }

  confirmAdd() {
    this.props.onCreateTodo();
  }

  close() {
    this.props.onCloseAddDialog();
  }
 
  render() {  
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.close}
      />,
      <FlatButton
        label="Add"
        primary={true}
        onClick={this.confirmAdd}
      />,
    ];

  	return (
      <Dialog
            actions={actions}
            modal={false}
            open={this.props.isOpen}
            className="add-todo-dialog" 
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
    title: state.ui.dialogs.addTodo.title,
    descrition: state.ui.dialogs.addTodo.descrition,
    isOpen: state.ui.dialogs.addTodo.isOpen,
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
  	onUpdateAddTodoDialogTitle: (title) => {
  		dispatch(updateAddTodoDialogTitle(title));
  	},
    onUpdateAddTodoDialogDescrition: (descrition) => {
      dispatch(updateAddTodoDialogDescription(descrition));
    },
    onCreateTodo: () => {
      dispatch(createTodo());
    },
    onCloseAddDialog: () => {      
      dispatch(closeAddTodoDialog());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoDialog);