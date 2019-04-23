import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import { addTask } from "../../actions/todoActions";

const uuidv1 = require('uuid/v1');

class AddTask extends Component {
  state = {
    id: uuidv1(),
    title: "",
    description: "",
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const { id, title, description} = this.state;

    // Check For Errors
    if (title === "") {
      this.setState({ errors: { title: "Title is required" } });
      return;
    }

    if (description === "") {
      this.setState({ errors: { description: "description is required" } });
      return;
    }

    const newTask = {
      id,
      title,
      description
    };

    //// SUBMIT Task ////
    this.props.addTask(newTask);

    // Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { id, title, description, errors } = this.state;

    return (
      <div className="card mb-3 small">
        <div className="card-header"><h4>Add Task</h4> </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Title"
              name="title"
              placeholder="Enter Title"
              value={title}
              onChange={this.onChange}
              error={errors.title}
            />
            <TextInputGroup
              label="Description"
              name="description"
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={this.onChange}
              error={errors.description}
            />
            <input
              type="submit"
              value="Add Task"
              className="btn btn-success btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null,{ addTask })(AddTask);
