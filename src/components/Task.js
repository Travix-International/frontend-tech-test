const React = require('react');
const { connect } = require('react-redux');
const { updateTask, deleteTask } = require('../actions');

const Task = ({ id, title, description, dispatch }) => {
  let titleElement;
  let descriptionElement;
  return (
    <li>
      <header
        ref={el => titleElement = el}
        contentEditable
        suppressContentEditableWarning
        onBlur={() => dispatch(updateTask({
          id,
          title: titleElement.textContent.trim(),
          description: descriptionElement.textContent.trim(),
        }))}
      >{title}</header>
      <p
        ref={el => descriptionElement = el}
        contentEditable
        suppressContentEditableWarning
        onBlur={() => dispatch(updateTask({
          id,
          title: titleElement.textContent.trim(),
          description: descriptionElement.textContent.trim(),
        }))}
      >{description}</p>
      <button onClick={() => dispatch(deleteTask(id))}>Delete</button>
    </li>
  );
};

module.exports = connect()(Task);