import React, { Component } from "react";
import { connect } from "react-redux";
import { editToDoItem } from "./../dispatchers/dispatcher";
import { bindActionCreators } from "redux";

const ENTER_KEY_CODE = 13;

export class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      toDoText: "",
      toDoTitle: ""
    };
  }

  handleBlur = () => {
    this.setState({ editable: false });
    this.changeStates();
  };
  handleDoubleClick = () => {
    this.setState({ editable: true });
  };
  changeStates = () => {
    this.setState({ editable: false });
    this.props.editToDoItem(this.props.task.id, this.state.toDoText);
  };

  handlePress = e => {
    if (e.charCode === ENTER_KEY_CODE) {
      this.changeStates();
    }
  };

  handleChange = (id, value) => {
    this.setState({ toDoText: value });
  };

  render() {
    const { task } = this.props;

    //it does matter if we are editing or not
    let todoElement;
    if (this.state.editable === true) {
      todoElement = (
        <>
          <div className="division-group">
            <h5 onChange={this.handleTitleChange} className="responsive-style">
              {task.title}
            </h5>
            <div className="label-input-group ">
              <input
                className="editable-input"
                hidden={false}
                editing={this.state.editable}
                value={this.state.toDoText}
                onChange={e => this.handleChange(task.id, e.target.value)}
                onBlur={this.handleBlur}
                autoFocus
                onKeyPress={this.handlePress}
              />
              <button
                className="btn btn-danger btn-sm m-2"
                onClick={this.props.deleteToDo}
              >
                Delete
              </button>
            </div>
          </div>
        </>
      );
    } else {
      todoElement = (
        <div className="division-group">
          <h5 className="responsive-style">{task.title}</h5>
          <div className="label-input-group ">
            <label
              className="responsive-style"
              onDoubleClick={this.handleDoubleClick}
            >
              {task.description}
            </label>
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={this.props.deleteToDo}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }

    return <li className="todo-item">{todoElement}</li>;
  }
}

const mapDispatchToProps = dispatch => ({
  editToDoItem: bindActionCreators(editToDoItem, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(ToDoItem);
