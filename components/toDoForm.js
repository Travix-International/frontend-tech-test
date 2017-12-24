import React, { Component } from 'react';
import { Fields, reduxForm } from 'redux-form';
import { Button, Spinner } from 'travix-ui-kit';

import { taskFields } from '../utils/constants';

import { TASK_GET_REQUESTED, TASK_UPDATE_REQUESTED, TASK_POST_REQUESTED } from '../actions/actionTypes';

import FormFields from './formFields';

class ToDoFormClass extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentWillMount() {

	}
	onSubmit(props) {
		const data = {
			id: props.id,
			title: props.title,
			date: props.date,
			description: props.description,
			done: props.done,
		};
		if (this.props.initialValues.title) {
			this.props.updateTask({
				...data,
				taskIndex: props.taskIndex,
				task: data
			});
		} else {
			this.props.reset();
			this.props.addTask({
				title: props.title,
				date: props.date,
				description: props.description
			});
		}
	}
	render() {
		return (
			<div className='form-container'>
				<form
					onSubmit={this.props.handleSubmit(this.onSubmit)}
					className='new-post'
				>
					<h2>{this.props.initialValues.title ? this.props.lang.edit_task_title : this.props.lang.new_task_title}</h2>
					<h4>{this.props.initialValues.title ? this.props.lang.edit_task_form_text : this.props.lang.new_task_form_text}</h4>
					<Fields
						names={Object.keys(this.props.fields)}
						lang={this.props.lang}
						component={FormFields}
						fields={this.props.fields}
						loading={(this.props.promises[TASK_GET_REQUESTED] || this.props.promises[TASK_UPDATE_REQUESTED] || this.props.promises[TASK_POST_REQUESTED])}
					/>
					<br />
					<div className='button-container'>
						<Button type='submit' disabled={(this.props.promises[TASK_GET_REQUESTED] || this.props.promises[TASK_UPDATE_REQUESTED] || this.props.promises[TASK_POST_REQUESTED])}>
							<span>{this.props.initialValues.title ? this.props.lang.save_task : this.props.lang.create_task}</span>
						</Button>
					</div>
				</form>
				{(this.props.promises[TASK_GET_REQUESTED] || this.props.promises[TASK_UPDATE_REQUESTED] || this.props.promises[TASK_POST_REQUESTED]) && <Spinner size='m' />}
			</div>
		);
	}
}

function validate(values) {
	const errors = {};
	Object.keys(taskFields).forEach(field => {
		if (!values[field]) {
			errors[field] = 'This Field is Required';
		}
	});
	return errors;
}

const ToDoForm = reduxForm({
	form: 'task',
	fields: taskFields,
	enableReinitialize: true,
	validate
})(ToDoFormClass);

export default ToDoForm;
