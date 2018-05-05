import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as taskActions from '../../actions/taskActions';
import styles from './AddTaskModal.scss';
import Modal from '../Modal/Modal';

class AddTask extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    showTaskModal: PropTypes.bool.isRequired
  };

  state = {
    title: '',
    description: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    if (title.trim().length) {
      this.props.actions.createTask({
        title,
        description
      });
      this.handleModalClose();
    } else {
      this.todoText.focus();
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleModalClose = () => {
    this.setState({ title: '', description: '' });
    this.props.actions.toggleTaskModal();
  };

  render() {
    /* eslint-disable no-return-assign */
    return (
      <Modal
        onClose={this.handleModalClose}
        show={this.props.showTaskModal}
        styles={styles.root}
      >
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.title}
            id="todo-text"
            name="title"
            onChange={this.handleChange}
            placeholder="title"
            ref={node => (this.todoText = node)}
            type="text"
            value={this.state.text}
          />
          <textarea
            className={styles.description}
            id="todo-description"
            maxLength="140"
            name="description"
            onChange={this.handleChange}
            placeholder="description (max 140 characters)"
            rows="5"
          />
          <input className={styles.button} type="submit" value="Add" />
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = ({ showTaskModal }) => ({ showTaskModal });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(taskActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
