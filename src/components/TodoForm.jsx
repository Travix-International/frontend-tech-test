import * as React from 'react';

export default class TodoForm extends React.Component {

  title;
  description;

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      message: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    const { selectedTask } = nextProps;
    this.setState({
      title: selectedTask ? selectedTask.title : '',
      description: selectedTask ? selectedTask.description : '',
    });
  }

  updateFieldTitle(e) {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  updateFieldDescription(e) {
    e.preventDefault();
    if (e.target.value.length <= 120) {
      this.setState({ description: e.target.value });
    }
  }

  validateForm() {
    const { title, description } = this.state;
    if (title.trim().length == 0 && description.trim().length == 0) {
      return false;
    }
    return true;
  }

  submitForm(e) {
    const { title, description } = this.state;
    const { todoFormConfiguration, selectedTaskId } = this.props;
    if (this.validateForm()) {
      if (e.currentTarget.value == 'Add') {
        todoFormConfiguration.add(title, description);
      } else {
        todoFormConfiguration.editTask(selectedTaskId, title, description);
      }
      this.setState({
        message: '',
      });
      return true;
    }
    this.setState({
      message: 'Please Enter Title Or Description',
    });
    return false;
  }

  generateFormButtons() {
    const { selectedTask } = this.props;

    if (selectedTask == null) {
      return (
        <button className="column-6 btn" type="submit" value="Add" onClick={(e) => this.submitForm(e)}>Add</button>
      )
    } else {
      return (
        <button className="column-6 btn" type="submit" value="Edit" onClick={(e) => this.submitForm(e)}>Edit</button>
      )
    }
  }

  renderButtons() {

    return (
      <React.Fragment>
        <div className="column-3" />
        <div className="column-6">
          <div className="column-3" />
          {this.generateFormButtons()}
          <div className="column-3" />
        </div>
        <div className="column-3" />
      </React.Fragment>
    )
  }

  render() {
    const { message } = this.state;
    /** State approach prefer over ref approach due to textarea defaulValue issue */

    return (
      <div className="column-12">
        {message !== '' ? <span className="text-center">{message}</span> : false}
        <div className="row">
          <div className="column-3" />
          <div className="column-6">
            <label className="column-12">Title</label>
            <input className="column-12 title" type="text" value={this.state.title} onChange={(e) => this.updateFieldTitle(e)} />
          </div>
          <div className="column-3" />
        </div>
        <div className="row">
          <div className="column-3" />
          <div className="column-6">
            <label className="column-12">Description</label>
            <textarea className="column-12 description" value={this.state.description} onChange={(e) => this.updateFieldDescription(e)} />
            <span>{120 - this.state.description.length} character remaining out of 120</span>
          </div>
          <div className="column-3" />
        </div>
        <div className="row text-center">
          {this.renderButtons()}
        </div>
      </div>
    )
  }
}