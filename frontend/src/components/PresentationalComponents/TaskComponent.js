import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Task = (props) => {
  let divStyle, base1, base2, base3;

  if(props.type === 'Completed Tasks'){
    base1 = 56 + (5 * props.index);
    base2 = 56 + (5 * props.index);
    base3 = 56 + (5 * props.index);
  } else {
    base1 = 0 + (2 * props.index);
    base2 = 86 + (10 * props.index);
    base3 = 1 + (5* props.index);
  }

  divStyle = {
    backgroundColor: `rgb(${base1}, ${base2}, ${base3})`
  }

  return (
    <div style={divStyle}>
      <ListItem button onClick = {props.clickHandler}>
        <ListItemText primary={props.todo.title} />
        <IconButton className={props.button} aria-label="Delete" onClick={props.openDialog}>
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
