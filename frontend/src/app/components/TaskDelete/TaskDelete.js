import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, Title, Description } from './assets/style';
import { Button } from '../Form';
import Section from '../Section';
import Task from '../../api/Task';
import Loading from '../Loading';

const TaskView = ({ match, history }) => {
  const taskId = match.params.id || null;

  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [taskId]);

  const submitDeletion = async () => {
    setIsSubmiting(true);
    const response = await new Task().deleteTask(taskId);

    if (response.status === 200) {
      setIsSubmiting(false);
      history.push(`/tasks`);
    } else {
      setIsSubmiting(false);
    }
  };

  if (!isLoaded) {
    return <Loading text="Prepar task for deletion" />;
  }

  return (
    <Section>
      <Wrapper>
        <Title>Are You sure?</Title>
        <Description>It cannot be recoverd later. Are you sure that you want to delete this task?</Description>
        <Button
          type="danger"
          id="task-delete"
          className="task-delete"
          onClick={() => submitDeletion()}
          isSubmiting={isSubmiting}
        >
          I am sure, Delete
        </Button>

        <NavLink to={`/tasks/${taskId}`} title="Cancel">
          <Button type="secondary" id="task-delete-cancel" className="task-delete-cancel">
            Cancel
          </Button>
        </NavLink>
      </Wrapper>
    </Section>
  );
};

export default TaskView;
