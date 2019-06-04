import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import { taskApi } from '../../api/api';
import * as actionTypes from '../../store/actionTypes';

// return some styles if if task is completed
const typographyStyle = isCompleted => (isCompleted ? { textDecoration: 'line-through' } : {});

export const TaskItem = ({ task, setSelectedTask, style }) => (
  <ListItem
    key={task.id}
    button
    onDoubleClick={() => setSelectedTask(task)}
    style={style}
  >
    <ListItemIcon>
      <Checkbox
        checked={task.completed}
        edge="start"
        onClick={() => taskApi.updateTask({ ...task, completed: !task.completed })}
        tabIndex={-1}
      />
    </ListItemIcon>
    <ListItemText
      primary={<Typography noWrap style={typographyStyle(task.completed)} variant="h6">{task.title}</Typography>}
      secondary={<Typography color="textSecondary" noWrap style={typographyStyle(task.completed)} variant="body2">{task.description}</Typography>}
    />
  </ListItem>
);

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  setSelectedTask: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setSelectedTask: selectedTask => dispatch({ type: actionTypes.SET_SELECT_TASK, selectedTask }),
});

export default connect(null, mapDispatchToProps)(TaskItem);
