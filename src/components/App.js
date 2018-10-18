import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container">
        <AddTodo />
        <Footer />
        <VisibleTodoList />
      </div>
    </div>
  </section>
);

export default App;
