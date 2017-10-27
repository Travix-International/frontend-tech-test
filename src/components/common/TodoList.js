import React, {PropTypes}  from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table } from "react-bootstrap";
import TodoListElement from "./TodoListElement";
import TodoDeletePrompt from "./TodoDeletePrompt";
import * as types from '../../sagas/actionTypes';
import * as todoActions from '../../sagas/todos';

// Todo list component
export class TodoList extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // default ui local state
    this.state = {
      delete_show: false,
      delete_todo: {},
    };

    // bind <this> to the event method
    this.showDelete = this.showDelete.bind(this);
    this.hideDelete = this.hideDelete.bind(this);
    this.todoDelete = this.todoDelete.bind(this);
  }

  // render
  render() {
    // pagination
    const {todos} = this.props;

    // show the list of todos
    return (
      <div>
        <Table bordered hover responsive striped name="todoTable">
          <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {todos.map((todo, index) => {
            return (
              <TodoListElement key={index} todo={todo} showDelete={this.showDelete}/>
            );
          })}
          </tbody>
        </Table>

        <TodoDeletePrompt show={this.state.delete_show} todo={this.state.delete_todo}
          hideDelete={this.hideDelete} todoDelete={this.todoDelete}/>
      </div>
    );
  }

  // show the delete todo prompt
  showDelete(todo) {
    // change the local ui state
    this.setState({
      delete_show: true,
      delete_todo: todo,
    });
  }

  // hide the delete todo prompt
  hideDelete() {
    // change the local ui state
    this.setState({
      delete_show: false,
      delete_todo: {},
    });
  }

  // delete the todo
  todoDelete() {
    // delete the todo
    this.props.actions.deleteTodo(this.state.delete_todo.id);
    // hide the prompt
    this.hideDelete();
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// export the connected class
function mapStateToProps(state) {
  return {
    todos: state.todos,

    // https://github.com/reactjs/react-router-redux#how-do-i-access-router-state-in-a-container-component
    // react-router-redux wants you to get the url data by passing the props through a million components instead of
    // reading it directly from the state, which is basically why you store the url data in the state (to have access to it)
    // page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
