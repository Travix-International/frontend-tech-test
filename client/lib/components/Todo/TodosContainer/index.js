import React from "react";
import propTypes from "prop-types";

export const TodosContainer = ({ children }) => (
  <div className="o-todos-wrapper">
    <div className="o-todos-container">
      {children}
    </div>
  </div>
);

TodosContainer.propTypes = {
  children: propTypes.node.isRequired
};
