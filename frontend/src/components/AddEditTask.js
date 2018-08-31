import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddEditTask extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      id: null,
      title: '',
      description: '',
      completed: false
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.markCompleteIncomplete = this.markCompleteIncomplete.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      id: nextProps.selectedTask.id,
      title: nextProps.selectedTask.title,
      description: nextProps.selectedTask.description,
      completed: nextProps.selectedTask.completed
    })
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
    if(this.props.selectedTask.title !== ''){
      this.props.updateTask(this.state);
    } else {
      this.props.createTask(this.state);
    }
  }

  markCompleteIncomplete(){
    this.setState({
      completed: this.state.completed ? false : true
    }, () => {
      this.props.updateTask(this.state);
    })
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
          id="multiline-static"
          multiline
          rows='10'
          label="Description"
          defaultValue={this.props.selectedTask.description}
          margin="normal"
          onChange = {this.handleInputChange('description')}
          />

          <Button
          variant='contained'
          color='secondary'
          onClick={this.markCompleteIncomplete}
          className = {'mark-button'}
          >
          {this.state.completed ? 'Mark Incomplete' : 'Mark Complete'}</Button>

          <Button
          variant='contained'
          color='primary'
          onClick={this.handleSubmit}
          className={'save-button'}
          >Save</Button>

        </Drawer>
      </div>
    )
  }
}

export default AddEditTask
