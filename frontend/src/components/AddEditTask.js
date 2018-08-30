import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddEditTask extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      id: this.props.nextId,
      title: '',
      description: ''
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose(){
    this.props.unselectTask();
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit(){
// First part of if checks if an update needs to be made and second handles a create task
    if(this.props.selectedTask.id){
      this.props.updateTask(this.state);
    } else {
      this.props.createTask(this.state);
    }
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
          defaultValue={this.props.selectedTask.title}
          margin="normal"
          onChange = {this.handleInputChange('title')}
          />
          <TextField
          id="name"
          label="Description"
          defaultValue={this.props.selectedTask.description}
          margin="normal"
          onChange = {this.handleInputChange('description')}
          />

          <Button
          variant='contained'
          color='primary'
          onClick={this.handleSubmit}
          >
          Save</Button>
        </Drawer>
      </div>
    )
  }
}

export default AddEditTask
