import React, { useState, useEffect } from 'react';
import TaskListItem from '../TaskListItem';
import Task from '../../api/Task';
import Message from '../Message';
import Loading from '../Loading';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchTask = async () => {
    const response = await new Task().getTasks();
    setTasks(response.data.tasks);
    setIsLoaded(true);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  if (!isLoaded) {
    return <Loading title="Loading tasks" />;
  }

  if (tasks.length < 1) {
    return <Message title="No Task" description="Let's do something new :)" />;
  }

  return (
    <ul>
      {tasks.map(task => (
        <TaskListItem key={task.id} id={task.id} title={task.title} description={task.description} />
      ))}
    </ul>
  );
};

export default TaskList;
