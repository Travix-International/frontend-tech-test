import React, { PureComponent } from 'react';
import '../style/TaskForm.scss';

class TaskForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      taskDetails: this.props.taskDetails || {
        title: '',
        description: ''
      },
      showError: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.taskDetails || !nextProps.taskDetails) {
      this.setState({ taskDetails: { title: '', description: '' }, showError: false });
      return;
    }

    this.setState({
      taskDetails: {
        id: nextProps.taskDetails.id,
        title: nextProps.taskDetails.title,
        description: nextProps.taskDetails.description
      },
      showError: false
    });
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    const details = this.state.taskDetails;
    const changedValue = {};
    changedValue[name] = value;

    const taskDetails = {
      ...details,
      ...changedValue
    };

    this.setState({ taskDetails });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { taskDetails } = this.state;
    const { onSubmit } = this.props;

    if (taskDetails.title && taskDetails.description) {
      onSubmit(taskDetails);
      this.setState({ showError: false });
    } else {
        this.setState({ showError: true });
    }
  }

  render() {
    const { title, description } = this.state.taskDetails;
    const { btnText } = this.props;

    return (
      <div className="TaskForm">
        <div className="error-msg">
          { this.state.showError ? <span>
            Sorry, every fields are required </span> : null }
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="taskForm-input">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={this.handleInputChange} />
          </div>
          <div className="taskForm-input">
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={this.handleInputChange} />
          </div>
          <button type="submit" className="cta-btn">{btnText}</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
