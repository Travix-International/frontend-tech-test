import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addTask: task => dispatch(addTask(task))
  };
}
class AddTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title, description } = this.state;
    this.props.addTask({ title, description });
    this.setState({ title: "", description:"" });
  }
  render() {
    const { title, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
        <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}
const AddTask = connect(null, mapDispatchToProps)(AddTaskForm);
export default AddTask;