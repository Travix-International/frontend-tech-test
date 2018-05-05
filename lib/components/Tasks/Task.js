import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './Task.scss';
import * as taskActions from '../../actions/taskActions';

class Task extends Component {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  };

  toggleTask = () => {
    const { actions, _id, isComplete } = this.props;
    actions.updateTask(_id, {
      isComplete: !isComplete
    });
  };

  removeTask = () => {
    const { actions, _id } = this.props;
    actions.removeTask(_id);
  };

  render() {
    const { title, description, isComplete, _id } = this.props;
    const taskStyles = `${styles.root} ${isComplete ? styles.complete : ''}`;
    const checkboxStyles = `${styles.checkbox} ${
      isComplete ? styles.checked : ''
    }`;
    return (
      <li className={taskStyles}>
        <div className={checkboxStyles}>
          <label htmlFor={`todo-${_id}`}>{title}</label>
          <input
            checked={isComplete}
            id={`todo-${_id}`}
            name="checkbox"
            onChange={this.toggleTask}
            type="checkbox"
          />
        </div>
        {description.length !== 0 && <p className={styles.description}>{description}</p>}
        <button className={styles.delete} onClick={this.removeTask}>
          Delete
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(taskActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Task);
