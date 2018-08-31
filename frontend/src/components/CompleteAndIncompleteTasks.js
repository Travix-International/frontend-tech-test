import React from 'react';
import Task from './PresentationalComponents/TaskComponent'
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List'

import DeleteConfirmation from './PresentationalComponents/DeleteConfirmation'

class CompleteAndIncompleteTasksComponent extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.root = props.classes.root;
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.state = {
      dialog: false
    }

  }

  openDialog = task => () => {
    this.setState({
      dialog: true
    })
  }

  closeDialog = task => event => {
    event.stopPropagation();

    if(task){
      console.log('hi');
    } else {
      this.setState({
        dialog: false
      })
    }
  }

  handleClick = (task) => () => {
    this.props.selectOrCreateTask(task);
  }

  handleDelete = (task) => (event) =>{
    event.stopPropagation();
    this.props.deleteTask(task)
  }

  parseIncompleteTasks(){
    return this.props.tasks.map((task, index) => {
      return(
        <Task
         openDialog = {this.openDialog(task)}
         type={this.props.type}
         index = {index}
         todo={task}
         clickHandler={this.handleClick(task)}
         key = {index} handleDeleteClick={this.handleDelete(task)}
         />
      )
    })
  }

  render(){
    // console.log(this.root);
    return(
      <div className={'alltasks', `${this.props.type}`}>
        <Paper elevation = {3}>
          <Typography variant="headline">
            {this.props.type}
          </Typography>
          <div>
            <List component='nav'>
              {this.parseIncompleteTasks()}
            </List>
          </div>
        </Paper>

        <DeleteConfirmation closeDialog = {this.closeDialog} open = {this.state.dialog}/>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

CompleteAndIncompleteTasksComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CompleteAndIncompleteTasksComponent)
