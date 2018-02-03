import React from 'react';
import { ToggleButton } from 'travix-ui-kit';

const TodoFilter = () => (
  <div>
    <ToggleButton items={['All', 'Active', 'Completed']} selectedIndex={0} />
  </div>
);

export default TodoFilter;
