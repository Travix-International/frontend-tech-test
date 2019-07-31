import React, { useState, useEffect } from 'react';
import TaskListItem from '../TaskListItem';
import Task from '../../api/Task';
import Message from '../Message';
import Loading from '../Loading';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setErorr] = useState(null);

  const fetchTask = async () => {
    const response = await new Task().getTasks();
    if (response.status === 200) {
      setTasks(response.data);
      setIsLoaded(true);
    } else {
      setErorr(true);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  if (!isLoaded) {
    return <Loading text="Loading tasks" />;
  }

  if (error !== null) {
    return <Message title="Error" description={error} type="error" />;
  }

  if (tasks.length < 1) {
    return <Message title="No Task" description="Let's do something new :)" type="success" />;
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
