import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import { getTask, updateTask } from "../../actions/todoActions";

class EditTask extends Component {
  state = {
    id: "",
    title: "",
    description: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { id, title, description } = nextProps.task;
    this.setState({
      id,
      title,
      description
    });

  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getTask(id);
  }

  onSubmit = e => {
    e.preventDefault();

    const { title, description } = this.state;

    // Check For Errors
    if (title === "") {
      this.setState({ errors: { title: "Title is required" } });
      return;
    }

    if (description === "") {
      this.setState({ errors: { description: "Description is required" } });
      return;
    }

    const { id } = this.props.match.params;
    const updTask = {
      id,
      title,
      description
    };

    //// UPDATE Task ////
    this.props.updateTask(updTask);

    // Clear State
    this.setState({
      title: "",
      description: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, description, errors } = this.state;

    return (
      <div className="card small mb-3">
        <div className="card-header"><h3>Edit Task</h3></div>
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
              placeholder="Enter Description"
              value={description}
              onChange={this.onChange}
              error={errors.description}
            />
            <input
              type="submit"
              value="Update Task"
              className="btn btn-success btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapstateToProps = state => ({
  task: state.list.task
});
export default connect(
  mapstateToProps,
  { getTask, updateTask }
)(EditTask);
