import React from 'react';
import Header from './Header';
import Filter from './Filter';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div id="container">
    <Header />
    <main>
      <AddTodo />
      <Filter />
      <VisibleTodoList />
    </main>
  </div>
);

export default App;
