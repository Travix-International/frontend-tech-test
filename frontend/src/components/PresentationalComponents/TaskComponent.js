import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Task = (props) => {
  return (
    <li onClick = {props.clickHandler}>
      <p>{props.todo.title}</p>
      <IconButton className={props.button} aria-label="Delete" onClick={props.handleDeleteClick}>
        <DeleteIcon />
      </IconButton>
    </li>
  )
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

Task.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Task)
