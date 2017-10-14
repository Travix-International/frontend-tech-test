import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../style/TaskForm.scss';

class TaskForm extends PureComponent {
	constructor(props){
    super(props);
    this.state = {
      taskDetails: this.props.taskDetails || {
				title: '',
				description: ''
			}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

	componentWillReceiveProps(nextProps) {
		console.log('nextProps', nextProps);
		if (!this.props.taskDetails) {
			return;
		}
		if (nextProps.taskDetails.title !== this.props.taskDetails.title ||
				nextProps.taskDetails.description !== this.props.taskDetails.description
		) {
			this.setState({
				taskDetails: {
					id: nextProps.taskDetails.id,
					title: nextProps.taskDetails.title,
					description: nextProps.taskDetails.description
				}
			});
		}
	}


	handleInputChange(event){
		const name = event.target.name;
		const value = event.target.value;
		const details = this.state.taskDetails;

		let changedValue = {};

		changedValue[name] = value;

		const taskDetails = {
			...details,
			...changedValue
		}

		 this.setState({ taskDetails });
	}

	handleSubmit = (event) => {
    event.preventDefault();
    const { taskDetails } = this.state;
		const { onSubmit } = this.props;

		console.log('taskDetails',taskDetails);

			if(taskDetails) {
				onSubmit(taskDetails);
				this.setState({taskDetails: {title: '', description: ''}});
   		}
  }

  render() {
		const { title, description } = this.state.taskDetails;
		const { btnText } = this.props;

    return (
      <div className="TaskForm">
				 <form onSubmit={this.handleSubmit}>
					 <div className="taskForm-input">
						<label htmlFor="title">Title: </label>
						<input
						type="text"
						name="title"
						value={title}
						className=""
						onChange={this.handleInputChange} />
					</div>
					<div className="taskForm-input">
						<label htmlFor="description">Description: </label>
						<input
							type="text"
							name="description"
							value={description}
							className="taskForm-input"
							onChange={this.handleInputChange} />
					</div>
					<button type="submit" className="cta-btn">{btnText}</button>
					</form>
      </div>
    );
  }
}

export default TaskForm;

TaskForm.propTypes = {
  taskDetails: PropTypes.object
};
