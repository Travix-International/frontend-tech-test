import React, { Component } from "react";
import PropTypes from "prop-types";
import ToDoControlsContainer from "../containers/ToDoControlsContainer";
import LinkTo from './common/LinkTo/LinkTo';

class ToDoList extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.getTodos();
  }

  renderToDoList() {
    let todos = this.props.todos.tasks;
    if(todos && todos.length > 0) {
      return todos.map((todo, i) => (
        <div key={todo.id} className="Col task">
          <h2 className='title'>{todo.title}</h2>
          <ToDoControlsContainer taskID={todo.id}/>
        </div>
      ))
    }
    else if(todos.length === 0) {
      return <div>No tasks found.</div>
    }

  }

  render() {
    const { tasks } = this.props.todos;
    const taskLength = tasks && tasks.length;

    return (
      <div className="container">
        <div className="row tasksList">
          <p>Hello buddy!</p>
          <LinkTo to={`/task/new/${taskLength}`} customClass="arrow" value="Create new task" />
          <p>Here is the list of tasks that you have already created!</p>
          {this.renderToDoList()}
          </div>
      </div>
    );
  }
}

ToDoList.propTypes = {
  todos: PropTypes.object
};



export default ToDoList;
