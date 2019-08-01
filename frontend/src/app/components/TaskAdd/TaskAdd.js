import React, { useState, useEffect } from 'react';
import Task from '../../api/Task';
import Section from '../Section';
import { Input, Button } from '../Form';

const TaskAdd = ({ history, setDraft, clearDraft, task }) => {
  const [title, setTitle] = useState({ value: task.title || '', error: '' });
  const [description, setDescription] = useState({ value: task.description || '', error: '' });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(title.value === '' || description.value === '');
    setDraft({
      title: title.value,
      description: description.value
    });
  }, [title, description, setDraft]);

  const submitTask = async () => {
    if (title.value === '' || description.value === '') {
      return false;
    }

    setIsSubmiting(true);

    const response = await new Task().createTask(title.value, description.value);
    if (response.status === 201) {
      setIsSubmiting(false);
      clearDraft();
      history.push('/');
    }

    return true;
  };

  return (
    <Section>
      <Input
        defaultValue={title.value}
        onChange={value => setTitle({ value, error: value !== '' ? '' : 'Title cannot be empty.' })}
        error={title.error}
        id="task-title"
        label="Title"
        placeholder="Write task title here"
      />
      <Input
        defaultValue={description.value}
        type="textarea"
        onChange={value => setDescription({ value, error: value !== '' ? '' : 'Description cannot be empty.' })}
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
