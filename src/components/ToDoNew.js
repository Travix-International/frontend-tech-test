import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from './common/Input/Input';
import Textarea from './common/Textarea/Textarea';
import Button from './common/Button/Button';
import LinkTo from './common/LinkTo/LinkTo';

class ToDoNew extends Component {

  constructor(props) {
    super();
    this.saveTodo = this.saveTodo.bind(this);
  }

  saveTodo() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let input = {
      title: title,
      description:description
    }
    this.props.addTask(input);
  }

  renderToDoNew() {
  	return  (
      <fieldset>
          <Input name="title" id="title" placeholder="Please enter task title" label="Title: " />
          <Textarea name="description" id="description" placeholder="Please enter task description" label="Description: " rows="10" cols="50" />  
          <Button onClickFunc={this.saveTodo} customClass="button green" value="Save" />
          <LinkTo to="/" customClass="button blue" value="Back" />
          { this.props.todos.message &&
            <p className="marginTop_10">{`${this.props.todos.message}!`}</p>
          }
      </fieldset>
    );
  }

  render() {
    return (
      <div className="pad_20">
        <h2 className="bold underline">New task</h2>
        {this.renderToDoNew()}
      </div>
    );
  }
}

export default ToDoNew;