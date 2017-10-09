import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import {
  Todo,
  TodoEdit
} from "lib/components/Todo";

import { updateTodo, deleteTodo, todos } from "../../../queries/todo";

const defaultState = {
  isEditing: false,
};

class TodoSwitch extends Component {

  constructor (props, context) {
    super(props, context);

    this.state = Object.assign({}, defaultState, { todo: props.data });
  }

  toggleEditMode = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  submitTodo = () => {
    this.toggleEditMode();

    const { todo } = this.state;

    this.props.updateTodo({
      variables: {
        id: todo.id,
        title: todo.title,
        description:todo.description
      },
      refetchQueries: [{
        query: todos,
      }],
    });
  }

  deleteTodo = () => {
    this.toggleEditMode();

    const { todo } = this.state;

    this.props.deleteTodo({
      variables: { id: todo.id },
      refetchQueries: [{
        query: todos,
      }],
    });
  }

  setTodoProperty = (key) => (e) => this.setState({
    todo: Object.assign({}, this.state.todo, { [key]: e.target.value })
  });

  changeTitle = this.setTodoProperty("title");
  changeDescription = this.setTodoProperty("description");

  render () {
    const { isEditing, todo } = this.state;

    let body;

    if (!isEditing) {
      body = (
        <Todo
          todo={todo}
          onDoubleClick={this.toggleEditMode}
        />
      );
    } else {
      body = (
        <TodoEdit
          defaultData={todo}
          onTitleChange={this.changeTitle}
          onDescriptionChange={this.changeDescription}
          onEnterKeyDown={this.submitTodo}
          onSubmitChange={this.submitTodo}
          onClickDelete={this.deleteTodo}
        />
      );
    }

    return (
      body
    );
  }
};

export default compose(
  graphql(updateTodo, { name: "updateTodo"} ),
  graphql(deleteTodo, { name: "deleteTodo"} )
)(TodoSwitch);
