const React = require('react');
const { connect } = require('react-redux');
const { createTask } = require('../actions');

const CreateTask = ({ dispatch }) => {
  let titleElement;
  let descriptionElement;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const title = titleElement.value.trim();
        const description = descriptionElement.value.trim();
        // Check that both inputs have content
        if (title.length && description.length) {
          dispatch(createTask({ title, description }));
          titleElement.value = descriptionElement.value = '';
        }
      }}
    >
      <label htmlFor="title">Title</label>
      <input id="title" ref={el => titleElement = el} />
      <label htmlFor="description">Description</label>
      <textarea id="description" ref={el => descriptionElement = el}></textarea>
      <button type="submit">Create</button>
    </form>
  );
};

module.exports = connect()(CreateTask);