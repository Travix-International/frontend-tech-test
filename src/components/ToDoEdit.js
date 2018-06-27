import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from './common/Input/Input';
import Textarea from './common/Textarea/Textarea';
import Button from './common/Button/Button';
import LinkTo from './common/LinkTo/LinkTo';

class ToDoEdit extends Component {

  constructor(props) {
    super();
    let taskID = props.match.params.id;
    props.getOneTask(taskID);
    this.state = {
      id: null,
      title: '',
      description: '',
    }
    this.onFieldChange = this.onFieldChange.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
     if(nextProps.todos.tasks) {
      this.setState({
        id: nextProps.todos.tasks.id,
        title: nextProps.todos.tasks.title,
        description: nextProps.todos.tasks.description
      });
     }

  }

  editTodo() {
    let id = this.props.todos.tasks.id;
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let input = {
      id: id,
      title: title,
      description:description
    }
    this.props.editTask(input);

  }

  onFieldChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  renderToDoEdit() {
    let todos = this.props.todos.tasks;
    if(todos) {
      return  (
        <fieldset>
          <Input name="title" id="title" onChangeFunc={this.onFieldChange} value={this.state.title} label="Title: " />
          <Textarea name="description" id="description" label="Description: " onChangeFunc={this.onFieldChange} value={this.state.description} rows="10" cols="50" />
          <Button onClickFunc={this.editTodo} customClass="button green" value="Save" />
          <LinkTo to="/" customClass="button blue" value="Back" />
        </fieldset>
      );
    }
    else {
      return <div className="pad_20">Loading...</div>
    }
  }

  render() {
    const { tasks } = this.props.todos;

    return (
      <div className="pad_20">
        <h2 className="bold underline">Edit task</h2>
        {this.renderToDoEdit()}
      </div>
    );
  }
}

export default ToDoEdit;