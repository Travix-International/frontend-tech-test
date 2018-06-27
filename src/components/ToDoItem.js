import React, { Component } from "react";
import PropTypes from "prop-types";
import LinkTo from './common/LinkTo/LinkTo';

class ToDoItem extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
  	let taskID = this.props.match.params.id;
    this.props.getOneTask(taskID);
  }

  renderToDoItem() {
  	let todos = this.props.todos.tasks;
    if(todos) {
	  	return  (
  		  <div className="tasksList">
          <p> Here is the details of your task </p>
          <h2>{todos.title}</h2>
          <div className="description">
            <p>{todos.description}</p>
          </div>
          <LinkTo to="/" customClass="button blue" value="Back" />
        </div>
	    );
	}
	else {
      return <div>Loading...</div>
    }
  }

  render() {
  	console.log("item prop")
	  console.log(this.props)
    const { tasks } = this.props.todos;

    return (
      <div>
        <div className="task">
          {this.renderToDoItem()}
        </div>
      </div>
    );
  }
}

ToDoItem.propTypes = {
  todos: PropTypes.object
};



export default ToDoItem;