import React from "react";
import propTypes from "prop-types";

export const Todo = ({
  todo: {
    title,
    description
  },
  onDoubleClick
}) => (
  <div className="o-todo" onDoubleClick={onDoubleClick}>
    <h3 className="o-todo__title">{title}</h3>
    <p className="o-todo__description">{description}</p>
  </div>
);

Todo.propTypes = {
  todo: propTypes.shape({
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  })
};

export * from "./TodosContainer";
export * from "./TodoEdit";
