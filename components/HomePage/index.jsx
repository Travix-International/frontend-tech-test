import React from 'react';
import PropTypes from 'prop-types';
import { observe } from 'frint-react';
import { of } from 'rxjs/observable/of';
import Form from '../Form';
import List from '../List';
import { addTodo } from '../../actions/todos';

function HomePage(props) {
  return (
    <div>
      <h3>Dashboard</h3>
      <Form
        action={props.addTodo}
        actionBtnTitle="Add"
        formTitle="Create a new Todo item"
      />
      <List />
    </div>
  );
}

HomePage.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default observe((app) => {
  const store = app.get('store');

  return of({
    addTodo: (...args) => store.dispatch(addTodo(...args)),
  });
})(HomePage);
