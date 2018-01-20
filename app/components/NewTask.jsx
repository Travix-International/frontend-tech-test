import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'travix-ui-kit';
import classNames from 'classnames';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      newTaskTitle: '',
      newTaskDescription: '',
      errorTitle: false,
      errorDescription: false,
    };
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({
      // Note that the state is bound to element's attribute `name`
      [name]: value,

      // Clear validation errors when typing
      errorTitle: false,
      errorDescription: false,
    });
  }

  handleKeyDown({ keyCode }) {
    if (keyCode === 13) {
      this.submit();
    }
  }

  componentDidMount() {
    this.newTitleInput.focus();
  }

  submit() {
    const { newTaskTitle, newTaskDescription } = this.state;
    if (newTaskTitle.trim() && newTaskDescription.trim()) {
      this.props.onSubmit(newTaskTitle, newTaskDescription);
      this.setState({
        newTaskTitle: '',
        newTaskDescription: '',
      });
    } else {
      this.setState({
        errorTitle: newTaskTitle.trim() === '',
        errorDescription: newTaskDescription.trim() === '',
      });
    }

    this.newTitleInput.focus();
  }

  render() {
    const { errorTitle, errorDescription } = this.state;
    return (
      <div className="container">
        <div className="row">
          <h2>What do you want to achieve today?</h2>
        </div>
        <div className="row">
          <div className="col-5">
            <Input
              name="newTaskTitle" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown}
              placeholder="Title" ref={(input) => { this.newTitleInput = input; }}
              status={classNames({ error: errorTitle })} value={this.state.newTaskTitle}
            />
          </div>
          <div className="col-5">
            <Input
              name="newTaskDescription" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown}
              placeholder="Description" status={classNames({ error: errorDescription })}
              value={this.state.newTaskDescription}
            />
          </div>
          <div className="col-2">
            <Button onClick={this.submit}>Add</Button>
          </div>
        </div>
      </div>
    );
  }
}

NewTask.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewTask;
