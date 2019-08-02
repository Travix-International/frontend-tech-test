import React, { useState, useEffect } from 'react';
import Task from '../../api/Task';
import Section from '../Section';
import { Input, Button } from '../Form';

/**
 * Button component
 *
 * @param {function} setDraft - Redux action which save task to draft
 * @param {setDraft} clearDraft - Redux action which clears draft
 * @param {object} task - The task saved in state
 */
const TaskAdd = ({ history, setDraft, clearDraft, task }) => {
  const [title, setTitle] = useState({ value: task.title || '', error: '' });
  const [description, setDescription] = useState({ value: task.description || '', error: '' });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    // Disable Save button if title or description are empty
    setIsDisabled(title.value === '' || description.value === '');

    // Set the task in draft while user is typing
    setDraft({
      title: title.value,
      description: description.value
    });
  }, [title, description, setDraft]);

  const submitTask = async () => {
    // Prevent from submission while title or description are empty
    if (title.value === '' || description.value === '') {
      return false;
    }

    setIsSubmiting(true);

    // Make http request to create task
    const response = await new Task().createTask(title.value, description.value);
    if (response.status === 201) {
      setIsSubmiting(false);

      // Clear draft and redirect to task pages after submission
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
