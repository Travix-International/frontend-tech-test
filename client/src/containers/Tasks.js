import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

import { taskApi } from '../api/api';

const Tasks = ({ tasks }) => {
  useEffect(() => {
    taskApi.getTasks();
  }, []);

  return (
    <Box component={Paper} height="100vh">
      <List>
        {
          tasks.map(task => (
            <ListItem key={task.id} button>
              <ListItemIcon>
                <Checkbox
                  checked={task.completed}
                  edge="start"
                  onClick={() => taskApi.updateTask({ ...task, completed: !task.completed })}
                  tabIndex={-1}
                />
              </ListItemIcon>
              <ListItemText primary={task.title} secondary={task.description} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete Task" edge="end" onClick={() => taskApi.deleteTask(task.id)}>
                  <DeleteRoundedIcon />
                </IconButton>
                <IconButton aria-label="Update Task" edge="end">
                  <CreateRoundedIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        }
      </List>
    </Box>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};
const mapStateToProps = state => ({ tasks: state.tasks });

export default connect(mapStateToProps, null)(Tasks);
