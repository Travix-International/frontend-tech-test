import React, { Component } from 'react';
import Link from 'next/link';
import { Button, Badge, Spinner } from 'travix-ui-kit';

class SingleTask extends Component {
	constructor(props) {
		super(props);
		this.toggleShowAll = this.toggleShowAll.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.updateTask = this.updateTask.bind(this);
		this.valueFormatter = (date) => new Date(Array.isArray(date) ? date[0] : date)
			.toDateString()
			.split(' ')
			.slice(1)
			.join(' ');
		this.state = {
			currentStatus: this.props.details ? this.props.details.done : false,
			showAll: false,
			deleting: false,
			updating: false
		};
	}

	componentWillReceiveProps(props) {
		if (props.details.done !== this.state.currentStatus) {
			this.setState({ updating: false, currentStatus: props.details.done });
		}
	}

	toggleShowAll() {
		this.setState({ showAll: !this.state.showAll });
	}

	deleteTask() {
		if (!this.state.deleting && !this.state.updating) {
			this.setState({ deleting: true }, () => this.props.deleteTask({ id: this.props.details.id }));
		}
	}

	updateTask() {
		if (!this.state.updating && !this.state.deleting) {
			this.setState({ updating: true }, () => this.props.updateTask({
				taskIndex: this.props.taskIndex,
				task: { ...this.props.details, done: !this.props.details.done },
				...this.props.details,
				done: !this.props.details.done
			}));
		}
	}

	render() {
		return (
			<div
				className={this.props.status.id === this.props.details.id ? `single-task-container ${this.props.status.status}` : 'single-task-container'}
				style={this.state.showAll ? { maxHeight: 1000 } : { maxHeight: 100 }}
			>
				<Badge
					border
					position='top'
					title={this.state.deleting && this.props.promises[this.props.details.id] ? this.props.lang.deleting : this.props.lang.delete}
					visible
					onClick={this.deleteTask}
				/>
				<div className='done-section'>
					<Button onClick={this.updateTask} style={this.state.updating && this.props.promises[this.props.details.id] ? { display: 'none' } : { display: 'block' }}>
						{this.props.details.done && <span>&#x2714;</span>}
						{!this.props.details.done && <span>&#x25A2;</span>}
					</Button>
					{this.state.updating && this.props.promises[this.props.details.id] && <Spinner size='m' />}
				</div>
				<div className='content-section' onClick={this.toggleShowAll}>
					<h3>{this.props.details.title}</h3>
					<small>{this.valueFormatter(this.props.details.date)}</small>
					<p>{this.props.details.description}</p>
				</div>
				<div className='edit-section'>
					<Link
						prefetch
						href={{ pathname: '/todo', query: { route: 'edit', id: this.props.details.id } }}
						as={`/todo/edit/${this.props.details.id}`}
					>
						<Button className='edit-button'>
							<span className='edit-icon'>&#x270E;</span>
						</Button>
					</Link>
					<Button onClick={this.deleteTask} className='delete-button' style={this.state.deleting && this.props.promises[this.props.details.id] ? { display: 'none' } : { display: '' }}>
						<span>&#x2718;</span>
					</Button>

					{this.state.deleting && this.props.promises[this.props.details.id] && <Spinner size='m' />}
				</div>
			</div>
		);
	}
}

export default SingleTask;
