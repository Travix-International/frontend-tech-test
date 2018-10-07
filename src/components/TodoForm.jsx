import * as React from 'react';

export default class TodoForm extends React.Component {

	title;
	description;

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
		}
	}

	componentWillReceiveProps(nextProps) {
		const { selectedTask } = nextProps;
		if (selectedTask) {
			this.setState({
				title: selectedTask.title,
				description: selectedTask.description,
			});
		}
	}

	updateFieldTitle(e) {
		e.preventDefault();
		this.setState({ title: e.target.value });
	}

	updateFieldDescription(e) {
		e.preventDefault();
		if(e.target.value.length <= 120){
			this.setState({ description: e.target.value });
		}		
	}

	generateButtons() {
		const { selectedTask, selectedTaskId, todoFormConfiguration } = this.props;
		const { title, description } = this.state;
		if (selectedTask == null) {
			return (
				<React.Fragment>
					<div className="column-3" />
					<div className="column-6">
						<div className="column-3" />
						<button className="column-6 btn" type="submit" onClick={() => todoFormConfiguration.add(title, description)}> Add </button>
						<div className="column-3" />
					</div>
					<div className="column-3" />
				</React.Fragment>

			)
		} else {
			return (
				<React.Fragment>
					<div className="column-3" />
					<div className="column-6">
						<button className="column-6 btn" type="submit" onClick={() => todoFormConfiguration.editTask(selectedTaskId, title, description)}> Edit </button>
						<button className="column-6 btn" type="submit" onClick={() => todoFormConfiguration.deleteTask(selectedTaskId)}> Delete </button>
					</div>
					<div className="column-3" />
				</React.Fragment>
			);
		}
	}

	render() {

		/** State approach prefer over ref approach due to textarea issue */

		return (
			<div className="column-12">
				<div className="row">
					<div className="column-3" />
					<div className="column-6">
						<label className="column-12">Task</label>
						<input className="column-12" type="text" value={this.state.title} onChange={(e) => this.updateFieldTitle(e)} />
					</div>
					<div className="column-3" />
				</div>
				<div className="row">
					<div className="column-3" />
					<div className="column-6">
						<label className="column-12">Description</label>
						<textarea className="column-12" value={this.state.description} onChange={(e) => this.updateFieldDescription(e)} />
						<span>{120 - this.state.description.length} character remaining out of 80</span>
					</div>
					<div className="column-3" />
				</div>
				<div className="row text-center">
					{this.generateButtons()}
				</div>
			</div>
		)
	}
}