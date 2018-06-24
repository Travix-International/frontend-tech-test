const React = require('react');
const { connect } = require('react-redux');
const { toggleTask } = require('../../actions');
const PropTypes = require('prop-types');

const ToggleButton = ({ id, completed, dispatch }) => (
  <div className="task__toggleButton">
    <input
      checked={completed}
      className="task__toggleButtonInput"
      hidden
      id={`toggleButton-${id}`}
      onChange={() => dispatch(toggleTask(id))} // eslint-disable-line
      type="checkbox"
    />
    <label
      className="task__toggleButtonFake"
      htmlFor={`toggleButton-${id}`}
    />
  </div>
);

ToggleButton.propTypes = {
  completed: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

ToggleButton.defaultProps = {
  completed: false,
};

module.exports = connect()(ToggleButton);
