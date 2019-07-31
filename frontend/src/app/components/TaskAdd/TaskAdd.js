import React, { useState, useEffect } from 'react';
import Task from '../../api/Task';
import Section from '../Section';
import { Input, Button } from '../Form';

const TaskAdd = ({ history }) => {
  const [title, setTitle] = useState({ value: '', error: '' });
  const [description, setDescription] = useState({ value: '', error: '' });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const isValid = input => input.value.trim() !== '';

  useEffect(() => {
    setTitle({ value: title.value, error: isValid(title) ? '' : 'Title cannot be empty.' });
    setDescription({ value: description.value, error: isValid(description) ? '' : 'Description cannot be empty.' });
    setIsDisabled(!isValid(title) || !isValid(description));
  }, [description, title]);

  const submitTask = async () => {
    setIsSubmiting(true);

    const response = await new Task().createTask(title.value, description.value);
    if (response.status === 201) {
      setIsSubmiting(false);
      history.push('/');
    }

    return true;
  };

  return (
    <Section>
      <Input
        onChange={value => setTitle({ value, error: '' })}
        error={title.error}
        id="task-title"
        label="Title"
        placeholder="Write task title here"
      />
      <Input
        type="textarea"
        onChange={value => setDescription({ value, error: '' })}
        error={description.error}
        id="task-description"
        label="Description"
        placeholder="Write task description here"
      />
      <Button
        type="primary"
        id="task-save"
        onClick={() => submitTask()}
        isSubmiting={isSubmiting}
        disabled={isDisabled}
      >
        Save Task
      </Button>
    </Section>
  );
};

export default TaskAdd;
