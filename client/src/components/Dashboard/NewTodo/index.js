import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

import {
  TodoEdit
} from "lib/components/Todo";

import { newTodo, todos } from "../../../queries/todo";

const defaultState = {
  todo: {
    title: "",
    description: ""
  }
}

class NewTodo extends Component {

  constructor (props, context) {
    super(props, context);

    this.state = Object.assign({}, defaultState);
  }

  submitTodo = () => {
    const { todo } = this.state;

    if (!todo.description || !todo.title) {
      return;
    }

    this.setState(defaultState);

    this.props.mutate({
      variables: {
        id: todo.id,
        title: todo.title,
        description:todo.description
      },
      refetchQueries: [{
        query: todos,
      }]
    });
  }

  setTodoProperty = (key) => (e) => this.setState({
    todo: Object.assign({}, this.state.todo, { [key]: e.target.value })
  });

  changeTitle = this.setTodoProperty("title");
  changeDescription = this.setTodoProperty("description");

  render () {
    const { todo } = this.state;

    return (
      <TodoEdit
        defaultData={todo}
        onTitleChange={this.changeTitle}
        onDescriptionChange={this.changeDescription}
        onEnterKeyDown={this.submitTodo}
        onSubmitChange={this.submitTodo}
      />
    );
  }
};

export default graphql(newTodo)(NewTodo);
