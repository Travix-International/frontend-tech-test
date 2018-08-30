import React from 'react'
import PropTypes from 'prop-types';

import IncompleteTasksContainer from '../containers/incomplete_tasks_container'
import CompleteTasksContainer from '../containers/complete_tasks_container'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';;

class HomeComponent extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getAllTasks()
  }

  render(){
    const classes = PropTypes.object.isRequired;

    return(
      <section>
        <IncompleteTasksContainer />
        <CompleteTasksContainer />

        <Button variant='fab' color='primary' aria-label='Add'>
          <AddIcon />
        </Button>
      </section>
    )
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

export default withStyles(styles) (HomeComponent)
