const React = require('react');
const { connect } = require('react-redux');
const { toggleTask } = require('../actions');

const ToggleButton = ({ id, completed, dispatch }) => (
  <input
    className="task__toggleButton"
    type="checkbox"
    checked={completed}
    onChange={() => dispatch(toggleTask(id))}
  />
);

module.exports = connect()(ToggleButton);