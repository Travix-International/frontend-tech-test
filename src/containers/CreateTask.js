const React = require('react');
const { connect } = require('react-redux');
const { createTask } = require('../actions');

const CreateTask = ({ dispatch }) => {
  let titleElement;
  let descriptionElement;
  return (
    <form
      className="createTask"
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
      <input
        className="createTask__title card"
        placeholder="Title"
        required
        ref={el => titleElement = el}
      />
      <textarea
        className="createTask__description card"
        placeholder="Description"
        required
        ref={el => descriptionElement = el}
      ></textarea>
      <button
        className="createTask__button"
        type="submit"
      >Create task</button>
    </form>
  );
};

module.exports = connect()(CreateTask);