import React from 'react';
import Task from './PresentationalComponents/TaskComponent'
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List'

class CompleteAndIncompleteTasksComponent extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.root = props.classes.root;
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
        <Task todo={task} clickHandler={this.handleClick(task)} key = {index} handleDeleteClick={this.handleDelete(task)}/>
      )
    })
  }

  render(){
    // console.log(this.root);
    return(
      <div>
        <Paper elevation = {1}>
          <Typography>
            {this.props.type}
          </Typography>
          <div>
            <List component='nav'>
              {this.parseIncompleteTasks()}
            </List>
          </div>
        </Paper>
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
