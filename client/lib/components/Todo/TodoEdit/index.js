import React from "react";
import propTypes from "prop-types";

const ENTER_KEY_CODE = 13;

const onKeyDown = (cb) => (e) => {
  if (e.keyCode === ENTER_KEY_CODE) {
    e.preventDefault();
    cb();
  }
}

export const TodoEdit = ({
  defaultData = {
    title,
    description
  },
  onTitleChange,
  onDescriptionChange,
  onClickDelete,
  onSubmitChange
}) => {
  const deleteTodoButton = onClickDelete ? (
    <button className="o-todo__delete" onClick={onClickDelete}>
      X
    </button>
  ) : null;

  return (
    <div className="o-todo">

      <textarea
        className="o-todo__title o-todo__edit"
        value={defaultData.title || ""}
        onChange={onTitleChange}
        onKeyDown={onKeyDown(onSubmitChange)}>
      </textarea>

      <textarea
        className="o-todo__description o-todo__edit"
        value={defaultData.description || ""}
        onChange={onDescriptionChange}
        onKeyDown={onKeyDown(onSubmitChange)}
        onBlur={onSubmitChange}>
      </textarea>

      {deleteTodoButton}

    </div>
  );
}

TodoEdit.propTypes = {
  defaultData: propTypes.shape({
    title: propTypes.string,
    description: propTypes.string
  }),
  onTitleChange: propTypes.func,
  onDescriptionChange: propTypes.func,
  onSubmitChange: propTypes.func
}
