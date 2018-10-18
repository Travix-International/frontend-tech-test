import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Api from '../services/Api';

const AddTodo = ({ dispatch }) => {
  let input;
  let payload;
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        payload = {
          title: input.value,
          description: input.value,
        };
        console.log(payload);
        Api.postTask(payload).then(() => {
          console.log(payload);
          dispatch(addTodo(payload));
        }).catch(err => console.log(err));
        input.value = '';
      }}
      >
        <input
          ref={node => input = node}
          className="input input-task"
          placeholder="Your task example"
          type="text"
        />
        <button
          className="button is-small is-fullwidth"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
