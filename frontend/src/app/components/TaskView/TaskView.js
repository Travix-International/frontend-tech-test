import React, { useState, useEffect } from 'react';
import { Title, Description } from './assets/style';
import Section from '../Section';
import Task from '../../api/Task';
import Message from '../Message';
import Loading from '../Loading';

const TaskView = ({ match }) => {
  const [task, setTask] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setErorr] = useState(null);

  const fetchTask = async () => {
    const taskId = match.params.id || null;

    const response = await new Task().getTask(taskId);
    if (response.status === 200) {
      setTask(response.data.task);
      setIsLoaded(true);
    } else {
      setErorr(response.statusText);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  if (!isLoaded) {
    return <Loading text="Loading task" />;
  }

  if (error !== null) {
    return <Message title="Error" description={error} type="error" />;
  }

  return (
    <Section>
      <Title>{task.title}</Title>
      <Description>{task.description}</Description>
    </Section>
  );
};

export default TaskView;
