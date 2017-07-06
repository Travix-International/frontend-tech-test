import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { updateTask } from '../actions';

class TasksEdit extends Component {
  componentDidMount() {
    if (this.props.pristine) {
      this.props.initialize(this.props.task);
    }
  }

  onSubmit({ title, description }) {
    const id = this.props.task.id;
  }

  renderField(field) {
    const { meta: { touched, error, invalid } } = field;

    switch (field.type) {
      case 'textarea':
        return (
          <fieldset className={`form-group textarea ${touched && invalid ? 'has-error' : ''}`}>
            <textarea className="form-input" placeholder={field.placeholder} {...field.input}></textarea>
            <span className={`form-msg-error ${touched && invalid ? 'show' : ''}`}>{error}</span>
          </fieldset>
        );
        break;
      default:
        return (
          <fieldset className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
            <input className="form-input" type={field.type} placeholder={field.placeholder} {...field.input}/>
            <span className={`form-msg-error ${touched && invalid ? 'show' : ''}`}>{error}</span>
          </fieldset>
        );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="taskedit-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          type="text"
          placeholder="Write a title for your task"
          component={this.renderField}
        />

        <Field
          name="description"
          type="textarea"
          placeholder="Describe your task"
          component={this.renderField}
        />

        <button action="submit" className="btn btn-primary">update task</button>
      </form>
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

const editTaskForm = reduxForm({
  form: 'editTaskForm',
  validate
})(TasksEdit);

function mapStateToProps(state) {
  return { state };
}

export default connect (mapStateToProps, { updateTask })(editTaskForm);
