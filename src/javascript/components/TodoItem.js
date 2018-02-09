import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Input, Button } from 'travix-ui-kit';

class TodoItem extends Component {
  constructor(props) {
    super();
    this.state = {
      editing: false,
      title: props.todo.title || '',
      description: props.todo.description || '',
    };

    this.renderInputs = this.renderInputs.bind(this);
    this.renderLabels = this.renderLabels.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.timeout = null;
  }

  handleInputTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleInputChange(value, property) {
    const stateObj = {};
    stateObj[property] = value;

    this.setState(stateObj);
  }

  handleSave(value, method) {
    const { todo } = this.props;
    const that = this;

    // #IMPROVEMENT: save method should not be triggered when text doesn't change.
    if (method === 'editTodoTitle' && value === '') {
      this.props.deleteTodo(todo.id);
    } else {
      this.props[method](todo.id, value);
    }

    this.timeout = setTimeout(() => {
      that.setState({
        editing: false,
      });
    }, 500);
  }

  toggleEditing() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }

    this.setState({
      editing: true,
    });
  }

  renderLabels() {
    const { todo, deleteTodo, toggleTodo } = this.props;

    return (
      <div>
        <div className="todo-app__item__checkbox">
          <Checkbox
            name={`checkbox${todo.id}`}
            checked={todo.completed}
            onChange={() => {
              toggleTodo(todo.id);
            }}
          >
            &nbsp;
          </Checkbox>
        </div>
        <div className="todo-app__item__text mb-10">
          <p>{todo.title}</p>
          <p>{todo.description}</p>
        </div>
        <Button type="button" size="xs" onClick={this.toggleEditing} mods={['item__edit-button']}>
          Edit
        </Button>

        <button
          className="todo-app__item__delete-button"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          x
        </button>
      </div>
    );
  }

  renderInputs() {
    return (
      <div>
        <Input
          ref={(input) => {
            this.titleInput = input;
          }}
          autoFocus
          name="todoTitleInput"
          mods={['edit-title-text']}
          onFocus={this.toggleEditing}
          onChange={(e) => {
            this.handleInputChange(e.target.value, 'title');
          }}
          onBlur={(e) => {
            this.handleSave(e.target.value, 'editTodoTitle');
          }}
          value={this.state.title}
        />

        <Input
          name="todoDescriptionInput"
          mods={['edit-description-text']}
          onFocus={this.toggleEditing}
          onChange={(e) => {
            this.handleInputChange(e.target.value, 'description');
          }}
          onBlur={(e) => {
            this.handleSave(e.target.value, 'editTodoDescription');
          }}
          value={this.state.description}
        />
      </div>
    );
  }

  renderMain() {
    return this.state.editing ? this.renderInputs() : this.renderLabels();
  }

  render() {
    const main = this.renderMain();

    return <li className="todo-app__item mb-10 pad-10 clearfix">{main}</li>;
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodoTitle: PropTypes.func.isRequired,
  editTodoDescription: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoItem;
