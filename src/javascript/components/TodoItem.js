import React from 'react';
import { Checkbox, Input } from 'travix-ui-kit';

const TodoItem = () => (
  <div>
    <div style={{ height: '20px' }}>
      <Checkbox name="checkbox1" checked />
    </div>

    <div>
      <Input
        mods={['edit-title-text']}
        onChange={(e, value) => {
          console.log('Input change', e, value);
        }}
        value="Title"
      />

      <Input
        mods={['edit-description-text']}
        onChange={(e, value) => {
          console.log('Input change', e, value);
        }}
        value="Description"
      />
    </div>
    <span>x</span>
  </div>
);

export default TodoItem;
