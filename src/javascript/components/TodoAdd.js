import React from 'react';
import { Input, Button } from 'travix-ui-kit';

const TodoAdd = () => (
  <div>
    <Input
      mods={['add-title-text']}
      onChange={(e, value) => {
        console.log('Input change', e, value);
      }}
    />
    <Input
      mods={['add-description-text']}
      onChange={(e, value) => {
        console.log('Input change', e, value);
      }}
    />
    <span>Items left: 2</span>
    <Button mods={['submit-todo']}>Save</Button>
  </div>
);

export default TodoAdd;
