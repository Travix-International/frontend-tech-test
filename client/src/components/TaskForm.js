import React, { PureComponent } from 'react';
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
		if (!this.props.taskDetails || !nextProps.taskDetails) {
			this.setState({taskDetails: {title: '', description: ''}});
			return;
		}

		this.setState({
			taskDetails: {
				id: nextProps.taskDetails.id,
				title: nextProps.taskDetails.title,
				description: nextProps.taskDetails.description
			}
		});
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

		if(taskDetails) {
			onSubmit(taskDetails);
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
						onChange={this.handleInputChange} />
					</div>
					<div className="taskForm-input">
						<label htmlFor="description">Description: </label>
						<input
							type="text"
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
