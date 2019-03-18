import React, { Component } from "react";
import { connect } from "react-redux";
import { addToDoItem } from "./../dispatchers/dispatcher";
import { bindActionCreators } from "redux";

export class AddToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      titleValue: ""
    };
  }

  handleTitleChange = e => {
    this.setState({
      titleValue: e.target.value
    });
  };

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleClick = e => {
    this.props.addToDoItem(this.state.titleValue, this.state.inputValue);
    this.setState({ inputValue: "", titleValue: "" });
  };

  render() {
    return (
      <div>
        {""}
        <div className="form-group row">
          <div className="col-xl-4" />
          <div className="col-xl-4 ">
            <input
              type="text"
              className="form-control"
              id="inputTodo"
              placeholder="Enter title here"
              onChange={this.handleTitleChange}
              value={this.state.titleValue}
            />
            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter task here"
              id="inputTodo"
              onChange={this.handleInputChange}
              value={this.state.inputValue}
            />
          </div>
          <div className="col-xl-3">
            <button className="btn btn-info btn-md" onClick={this.handleClick}>
              Add Task
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToDoItem: bindActionCreators(addToDoItem, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(AddToDo);
