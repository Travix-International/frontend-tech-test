import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addTask, fetchTasks } from '../actions';

class TasksNew extends Component {
  onSubmit({ title, description }) {
    this.props.addTask({ title, description });
    this.props.fetchTasks();
  }

  renderField(field) {
    const { meta: { touched, error, invalid } } = field;

    switch (field.type) {
      case 'textarea':
        return (
          <fieldset className={`form-group textarea ${touched && invalid ? 'has-error' : ''}`}>
            <label htmlFor={field.htmlFor}>{field.label}</label>
            <textarea id={field.htmlFor} className="form-input" placeholder={field.placeholder} {...field.input}></textarea>
            <span className={`form-msg-error ${touched && invalid ? 'show' : ''}`}>{error}</span>
          </fieldset>
        );
        break;
      default:
        return (
          <fieldset className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
            <label htmlFor={field.htmlFor}>{field.label}</label>
            <input id={field.htmlFor} className="form-input" type={field.type} placeholder={field.placeholder} {...field.input}/>
            <span className={`form-msg-error ${touched && invalid ? 'show' : ''}`}>{error}</span>
          </fieldset>
        );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="grid">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="title"
            type="text"
            label="Title"
            htmlFor="title"
            placeholder="Write a title for your task"
            component={this.renderField}
          />

          <Field
            name="description"
            type="textarea"
            label="Description"
            htmlFor="description"
            placeholder="Describe your task"
            component={this.renderField}
          />

          <button action="submit" className="btn btn-primary">add task</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Write a title for the task';
	}

  if (!values.description) {
		errors.description = 'Write a description for the task';
	}

	return errors;
}

const newTaskForm = reduxForm({ form: 'newTaskForm', validate })(TasksNew);

function mapStateToProps(state) {
  return { state };
}

export default connect (mapStateToProps, { addTask, fetchTasks })(newTaskForm);
