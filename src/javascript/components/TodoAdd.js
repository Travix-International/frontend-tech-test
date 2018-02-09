import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'travix-ui-kit';

class TodoAdd extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      displayTitleError: false,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleSave() {
    if (this.state.title.length > 0) {
      this.props.createTodo(this.state.title, this.state.description);
      this.setState({
        title: '',
        description: '',
        displayTitleError: false,
      });
    } else {
      this.setState({
        displayTitleError: true,
      });
    }
  }

  render() {
    return (
      <div className="todo-app__create-container mb-10 clearfix">
        <div className="clearfix mb-10">
          <div className="todo-app__title-container">
            <span>Title *</span>
            <Input
              mods={['add-title-text']}
              onChange={this.handleTitleChange}
              value={this.state.title}
            />
            {this.state.displayTitleError ? (
              <p className="todo-app__title-error">Title field is mandatory.</p>
            ) : (
              false
            )}
          </div>

          <div className="todo-app__description-container">
            <span>Description</span>
            <Input
              mods={['add-description-text']}
              onChange={this.handleDescriptionChange}
              value={this.state.description}
            />
          </div>
        </div>

        <span className="todo-app__count fl">Items left: {this.props.todosLeft}</span>
        <div className="fr">
          <Button onClick={this.handleSave} mods={['submit-todo']}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

TodoAdd.propTypes = {
  createTodo: PropTypes.func.isRequired,
  todosLeft: PropTypes.number.isRequired,
};

export default TodoAdd;
