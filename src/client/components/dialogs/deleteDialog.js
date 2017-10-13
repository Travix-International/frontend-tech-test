'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {
  closeDeleteDialog,
  deleteTodo
} from '../../store/actions/index';

class DeleteDialog extends Component {
	constructor(props) {
	    super(props);
	    this.confirmDelete = this.confirmDelete.bind(this);
	    this.close = this.close.bind(this);
	}

	confirmDelete() {
		this.props.onDeleteTodo(this.props.todoId);
	}

	close() {
		this.props.onCloseDeleteDialog();
	}

	render() {
	  const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.close}
      />,
      <FlatButton
        label="Delete"
        primary={true}
        onClick={this.confirmDelete}
      />,
    ];

    return (
	        <Dialog
	          className="delete-dialog"
	          actions={actions}
	          modal={false}
	          open={this.props.isOpen}
	          onRequestClose={this.close} >
	          <p className="dialog-text">Are you sure?</p>
	        </Dialog>
	  	);
	}
}

var mapStateToProps = (state) => {
  return {
  	isOpen: state.ui.dialogs.delete.isOpen,
  	todoId: state.ui.dialogs.delete.todoId
  }
}

var mapDispatchToProps = (dispatch) => {
	return {
		onDeleteTodo: (id) => {      
	      dispatch(deleteTodo(id));
	    },
	    onCloseDeleteDialog: () => {      
	      dispatch(closeDeleteDialog());
	    }
	}
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(DeleteDialog)