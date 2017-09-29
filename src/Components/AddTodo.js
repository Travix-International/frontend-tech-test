import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import './AddTodo.scss';

const AddTodo = ({ openAddTodo, loading }) => (
  <div className="add-todo">
    {!loading && (
      <Button
        className="add-todo__button"
        color="accent"
        onClick={() => openAddTodo()}
        raised
      >
        Add to do
      </Button>
    )}
  </div>
);

AddTodo.propTypes = {
  loading: PropTypes.bool,
  openAddTodo: PropTypes.func,
};

export {
  AddTodo as default
};
