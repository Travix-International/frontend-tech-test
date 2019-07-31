import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Title, Description, Wrapper, ActionBar } from './assets/style';
import Section from '../Section';
import Task from '../../api/Task';
import Message from '../Message';
import Loading from '../Loading';

const TaskView = ({ match }) => {
  const taskId = match.params.id || null;

  const [task, setTask] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setErorr] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await new Task().getTask(taskId);

      if (response.status === 200) {
        setTask(response.data.task);
        setIsLoaded(true);
      } else {
        setErorr(response.statusText);
        setIsLoaded(true);
      }
    };
    fetchTask();
  }, [taskId]);

  if (!isLoaded) {
    return <Loading text="Loading task" />;
  }

  if (error !== null) {
    return <Message title="Error" description={error} type="error" />;
  }

  return (
    <Section>
      <Wrapper>
        <Title>{task.title}</Title>
        <Description>{task.description}</Description>
      </Wrapper>
      <ActionBar>
        <NavLink to={`/tasks/${taskId}/edit`} title="Edit" className="task-edit">
          <MdEdit />
        </NavLink>
        <NavLink to={`/tasks/${taskId}/delete`} title="Delete" className="task-delete">
          <MdDelete />
        </NavLink>
      </ActionBar>
    </Section>
  );
};

export default TaskView;
