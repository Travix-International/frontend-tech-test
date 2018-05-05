import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './AddTaskButton.scss';
import * as filterActions from '../../actions/filterActions';
import * as taskActions from '../../actions/taskActions';

class AddTaskButton extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    showCompleted: PropTypes.bool.isRequired
  };

  handleChange = () => {
    this.props.actions.toggleShowCompleted();
  };

  handleAddTaskClick = () => {
    this.props.actions.toggleTaskModal();
  };

  render() {
    const { showCompleted } = this.props;
    const checkboxStyles = `checkbox ${
      showCompleted ? 'checkbox--checked' : ''
    }`;
    return (
      <section className={styles.root}>
        <div className={styles.container}>
          <div className={styles.filters}>
            <div className={checkboxStyles}>
              <input
                checked={showCompleted}
                id="show-completed"
                name="show-completed"
                onChange={this.handleChange}
                type="checkbox"
              />
              <label htmlFor="show-completed">Show completed</label>
            </div>
          </div>
          <button className={styles.button} onClick={this.handleAddTaskClick}>
            Add Task
          </button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ showCompleted }) => ({ showCompleted });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...filterActions,
      ...taskActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskButton);
