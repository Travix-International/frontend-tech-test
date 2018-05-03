import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as taskActions from '../../actions/taskActions';

class Task extends Component {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    isComplete: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  };

  toggleTask = () => {
    const { actions, _id, isComplete } = this.props;
    actions.updateTask(_id, { isComplete: !isComplete });
  };

  removeTask = () => {
    const { actions, _id } = this.props;
    actions.removeTask(_id);
  };

  render() {
    const { title, isComplete, _id } = this.props;
    return (
      <li>
        <label htmlFor={`todo-${_id}`}>
          <input
            checked={isComplete}
            id={`todo-${_id}`}
            name="checkbox"
            onChange={this.toggleTask}
            type="checkbox"
          />
          {title}
        </label>
        <button onClick={this.removeTask}>X</button>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(taskActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Task);
