import React from 'react';
import TaskListItem from '../TaskListItem';

const TaskList = () => {
  return (
    <ul>
      <TaskListItem
        key={1}
        id={1}
        title="Go home"
        description="Go home soon you need to wait for Atefeh. Go home soon you need to wait for. Go home soon you need."
      />
      <TaskListItem key={2} id={2} title="Buy pizza" description="Your turn to cook" />
      <TaskListItem key={3} id={3} title="Buy pizza" description="Your turn to cook" />
      <TaskListItem key={4} id={4} title="Buy pizza" description="Your turn to cook" />
      <TaskListItem key={5} id={5} title="Buy pizza" description="Your turn to cook" />
      <TaskListItem key={6} id={6} title="Buy pizza" description="Your turn to cook" />
    </ul>
  );
};

export default TaskList;
