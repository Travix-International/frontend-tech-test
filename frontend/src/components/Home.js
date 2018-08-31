import React from 'react'
import './home.css'
import PropTypes from 'prop-types';

import IncompleteTasksContainer from '../containers/incomplete_tasks_container'
import CompleteTasksContainer from '../containers/complete_tasks_container'
import AddEditTaskContainer from '../containers/add_edit_task_container'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';;


class HomeComponent extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.getAllTasks()
  }

  handleClick(){
    this.props.selectOrCreateTask();
  }

  render(){
    const classes = PropTypes.object.isRequired;

    return(
      <section>
        <IncompleteTasksContainer />
        <CompleteTasksContainer />
        <AddEditTaskContainer />

        <Button variant='fab' color='secondary' aria-label='Add' onClick={this.handleClick} className='add-button'>
          <AddIcon />
        </Button>
      </section>
    )
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    positon: 'fixed',
    bottom: '20px',
    'z-index': 1000
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

export default withStyles(styles) (HomeComponent)
