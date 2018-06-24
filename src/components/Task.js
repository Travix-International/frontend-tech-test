const React = require('react');
const { connect } = require('react-redux');
const { updateTask } = require('../actions');
const ToggleButton = require('./ToggleButton');
const DeleteButton = require('./DeleteButton');

const Task = ({ id, title, description, completed, dispatch }) => {
  let titleElement;
  let descriptionElement;
  return (
    <li className={`card task${completed ? ' task--completed' : ''}`}>
      <header
        className="card__title"
        ref={el => titleElement = el}
        contentEditable={!completed}
        suppressContentEditableWarning={!completed}
        onBlur={() => dispatch(updateTask({
          id,
          title: titleElement.textContent.trim(),
          description: descriptionElement.textContent.trim(),
        }))}
      >{title}</header>
      <p
        className="card__description"
        ref={el => descriptionElement = el}
        contentEditable={!completed}
        suppressContentEditableWarning={!completed}
        onBlur={() => dispatch(updateTask({
          id,
          title: titleElement.textContent.trim(),
          description: descriptionElement.textContent.trim(),
        }))}
      >{description}</p>

      <ToggleButton id={id} completed={completed} />
      <DeleteButton id={id} />
    </li>
  );
};

module.exports = connect()(Task);
