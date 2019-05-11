import React, { Component } from "react";
import { connect } from "react-redux";
import { createTask } from "../actions/index";
import './add-task.css';

function mapDispatchToProps(dispatch) {
  return {
    createTask: task => dispatch(createTask(task))
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
    this.props.createTask({ title, description });
    this.setState({ title: "", description:"" });
  }
  render() {
    const { title, description } = this.state;
    return (
      <form className="addTaskForm form-row" onSubmit={this.handleSubmit}>
        <div className="col-sm-4 my-1">
            <div className="input-group">
                {/* <label htmlFor="title">Title</label> */}
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    placeholder="Title"
                    onChange={this.handleChange}
                />
            </div>
        </div>
        <div className="col-sm-4 my-1">
            <div className="input-group">
            {/* <label htmlFor="description">Description</label> */}
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={description}
                    placeholder="Description"
                    onChange={this.handleChange}
                />
            </div>
        </div>
        <button type="submit" className="btn btn-success">
          Create Task
        </button>
      </form>
    );
  }
}
const AddTask = connect(null, mapDispatchToProps)(AddTaskForm);
export default AddTask;