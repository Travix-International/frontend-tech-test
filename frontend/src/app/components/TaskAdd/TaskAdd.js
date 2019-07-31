import React, { useState, useEffect } from 'react';
import Section from '../Section';
import Input from '../Form';

const TaskAdd = () => {
  const [title, setTitle] = useState({ value: '', error: '' });
  const [description, setDescription] = useState({ value: '', error: '' });

  useEffect(() => {
    if (title.value.trim() === '') {
      setTitle({ value: title.value, error: 'Title cannot be empty.' });
    } else {
      setTitle({ value: title.value, error: '' });
    }
  }, [title.value]);

  console.log(description);

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
        id="task-description"
        label="Description"
        placeholder="Write task description here"
      />
    </Section>
  );
};

export default TaskAdd;
