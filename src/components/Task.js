const React = require('react');
const { connect } = require('react-redux');
const { updateTask, deleteTask, toggleTask } = require('../actions');

const Task = ({ id, title, description, completed, dispatch }) => {
  let titleElement;
  let descriptionElement;
  return (
    <li className={`task${completed ? ' task--completed' : ''}`}>
      <header
        className="task__title"
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
        className="task__description"
        ref={el => descriptionElement = el}
        contentEditable
        suppressContentEditableWarning
        onBlur={() => dispatch(updateTask({
          id,
          title: titleElement.textContent.trim(),
          description: descriptionElement.textContent.trim(),
        }))}
      >{description}</p>
      <input
        className="task__toggleButton"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTask(id))}
      />
      <button
        className="task__deleteButton"
        onClick={() => dispatch(deleteTask(id))}
      >Delete</button>
    </li>
  );
};

module.exports = connect()(Task);