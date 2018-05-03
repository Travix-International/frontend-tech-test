import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as taskActions from '../../actions/taskActions';

class AddTask extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  state = {
    text: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { text } = this.state;

    if (text.trim().length) {
      this.props.actions.createTask({
        title: text,
        description: 'Yet another task'
      });
      this.setState({
        text: ''
      });
    } else {
      // better UX by focusing on the input with the error
      this.todoText.focus();
    }
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    /* eslint-disable no-return-assign */
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="todo-text"
          name="todo-text"
          onChange={this.handleChange}
          placeholder="something you doing?"
          ref={node => (this.todoText = node)}
          type="text"
          value={this.state.text}
        />
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(taskActions, dispatch)
});

export default connect(null, mapDispatchToProps)(AddTask);
