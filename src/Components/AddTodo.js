import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import './AddTodo.scss';

const AddTodo = ({ openAddTodo }) => (
  <div className="add-todo">
    <Button color="accent" onClick={() => openAddTodo} raised>Add to do</Button>
  </div>
);

AddTodo.propTypes = {
  openAddTodo: PropTypes.func,
};

export {
  AddTodo as default
};
