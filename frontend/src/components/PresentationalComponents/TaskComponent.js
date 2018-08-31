import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Task = (props) => {
  return (
    <div>
      <ListItem button onClick = {props.clickHandler}>
        <ListItemText primary={props.todo.title} />
        <IconButton className={props.button} aria-label="Delete" onClick={props.handleDeleteClick}>
        <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider />
    </div>
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
