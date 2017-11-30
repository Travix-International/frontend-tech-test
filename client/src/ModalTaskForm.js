import React, { Component } from "react";
import "./ModalTaskForm.css";

class ModalTaskForm extends Component {
  constructor(props) {
    super(props);

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  handleChangeTitle(e) {
    if (e.target.value.trim() === "") {
      e.target.className = "EmptyField";
    } else {
      e.target.className = "FullField";
    }
    this.props.onTitleChange(e.target.value);
  }

  handleChangeDescription(e) {
    this.props.onDescriptionChange(e.target.value);
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    var header = (this.props.taskId !== null) ? "Update task: " + this.props.taskId : "Create new task";

    let submitButton = null;
    if (this.props.title.trim() && this.props.description.trim()) {
      submitButton = <button onClick={this.props.onSubmit}>Submit</button>;
    } else {
      submitButton = <button onClick={this.props.onSubmit} disabled>Submit</button>;
    }

    return (
      <div className="BackDrop">
        <div className="ModalForm">
          <h1>{header}</h1>
          <div>
            <div>Title:</div>
            <div>
              <input
                className={this.props.title.trim() ? "FullField" : "EmptyField"}
                type="text"
                value={this.props.title}
                onChange={this.handleChangeTitle}
                autoFocus
              />
            </div>
          </div>
          <div>
            <div>Description:</div>
            <div>
              <textarea
                className={this.props.description.trim() ? "FullField" : "EmptyField"}
                value={this.props.description}
                onChange={this.handleChangeDescription}
              />
            </div>
          </div>
          <div className="FooterForm">
            {submitButton}
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalTaskForm;