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
    let numRows;
    if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      ){
         numRows = 5;
       }
      else {
         numRows = 10;
     }

    return(
      <div>
        <Drawer anchor='bottom'
        open={this.props.selectOrCreate}
        onClose={this.handleClose}
        >
          <h1>Task Details</h1>
          <TextField
          required
          id="name"
          label="Title"
          defaultValue={this.props.selectedTask.title}
          margin="normal"
          onChange = {this.handleInputChange('title')}
          />

          <TextField
          required
          id="multiline-static"
          multiline
          rows={`${numRows}`}
          label="Description"
          defaultValue={this.props.selectedTask.description}
          margin="normal"
          onChange = {this.handleInputChange('description')}
          />

          <div className = {'button-container ' + (this.state.id === null ? 'hide' : '')}>
            <Button
            variant='contained'
            color='secondary'
            onClick={this.markCompleteIncomplete}
            className = {'mark-button'}
            >
            {this.state.completed ? 'Mark Incomplete' : 'Mark Complete'}</Button>
          </div>

          <div className={'button-container'}>
            <Button
            disabled={this.state.title === '' || this.state.description === ''}
            variant='contained'
            color='primary'
            onClick={this.handleSubmit}
            className={'save-button'}
            >Save</Button>
          </div>

        </Drawer>
      </div>
    )
  }
}

export default AddEditTask
