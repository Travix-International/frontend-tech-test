import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddEditTask extends React.Component{

  constructor(props){
    super(props)

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(){
    this.props.unselectTask();
  }

  render(){
    return(
      <div>
        <Drawer anchor='bottom'
        open={this.props.selectOrCreate}
        onClose={this.handleClose}
        >
          <h1>Task Details</h1>
          <TextField
          id="name"
          label="Title"
          value={this.props.selectedTask.title}
          margin="normal"
          />
          <TextField
          id="name"
          label="Description"
          value={this.props.selectedTask.description}
          margin="normal"
          />

          <Button
          variant='contained'
          color='green'
          >
          Save</Button>
        </Drawer>
      </div>
    )
  }
}

export default AddEditTask
