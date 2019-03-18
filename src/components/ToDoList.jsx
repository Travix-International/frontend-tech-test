import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ToDoItem from "./ToDoItem";
import { deleteToDoItem, getToDoItems } from "./../dispatchers/dispatcher";

class ToDoList extends Component {
  PropTypes = {
    todoItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired
    ),
    getToDoItems: PropTypes.func,
    deleteToDoItem: PropTypes.func
  };

  componentWillMount() {
    this.props.getToDoItems();
  }

  state = {};

  handleDelete = e => {
    console.log("asdas");
  };

  getToDoList() {}

  render() {
    const { todoItems } = this.props;
    return (
      <ul className="todo-list">
        {todoItems.length > 0 ? (
          todoItems.map(todoItem => (
            <ToDoItem
              key={todoItem.id}
              deleteToDo={() => this.props.deleteToDoItem(todoItem.id)}
              task={todoItem}
            />
          ))
        ) : (
          <h4 className="empty-list">There are no tasks to do </h4>
        )}
      </ul>
    );
  }
}

const mapStateToProps = ({ todoItems }) => ({ todoItems });
const mapDispatchToProps = {
  deleteToDoItem,
  getToDoItems
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
