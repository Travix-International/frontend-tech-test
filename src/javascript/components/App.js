import React from 'react';
import TodoAdd from './TodoAdd';
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';

const App = () => (
  <div>
    <TodoAdd />
    <TodoFilter />
    <TodoList />
  </div>
);

export default App;
