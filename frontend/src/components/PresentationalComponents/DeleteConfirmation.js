import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';


const DeleteConfirmation = (props) => {

  return (
    <div>
      <Dialog open = {props.open} onClose={props.closeDialog}>
        <DialogTitle id='dialog-title'>Are you sure you want to delete this task?</DialogTitle>

        <div className={'button-container'}>
          <Button
          variant='contained'
          color='secondary'
          className = {'delete-yes'}
          onClick = {props.closeDialog(props.task)}
          >
          Yes</Button>
        </div>

        <div className={'button-container'}>
            <Button
            variant='contained'
            color='primary'
            className = {'delete-no'}
            onClick = {props.closeDialog(false)}
            >
            No</Button>
        </div>

      </Dialog>
    </div>
  )
}

export default DeleteConfirmation
