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
        title="Delete"
        onClick={() => dispatch(deleteTask(id))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
      </button>
    </li>
  );
};

module.exports = connect()(Task);