import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { taskApi } from '../../api/api';
import TaskItemActions from '../TaskItemActions/TaskItemActions';

const TaskItem = ({ task }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <ListItem
      key={task.id}
      button
      ContainerProps={{
        onMouseEnter: () => setShowActions(true),
        onMouseLeave: () => setShowActions(false),
      }}
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
        primary={task.title}
        primaryTypographyProps={task.completed ? { style: { textDecoration: 'line-through' } } : {}}
        secondary={task.description}
        secondaryTypographyProps={task.completed ? { style: { textDecoration: 'line-through' } } : {}}
      />
      <ListItemSecondaryAction>
        {
          showActions ? <TaskItemActions task={task} /> : ''
        }
      </ListItemSecondaryAction>
    </ListItem>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
