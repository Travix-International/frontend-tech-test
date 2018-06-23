const React = require('react');
const { connect } = require('react-redux');
const { toggleTask } = require('../actions');

const ToggleButton = ({ id, completed, dispatch }) => (
  <div className="task__toggleButton">
    <input
      className="task__toggleButtonInput"
      id="toggleButton"
      type="checkbox"
      hidden
      checked={completed}
      onChange={() => dispatch(toggleTask(id))}
    />
    <label
      className="task__toggleButtonFake"
      htmlFor="toggleButton"
    />
  </div>
);

module.exports = connect()(ToggleButton);