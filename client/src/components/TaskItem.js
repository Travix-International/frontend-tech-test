import React, { PureComponent } from 'react';
import Modal from './Modal';
import TaskForm from './TaskForm';
import { btnTextUpdate, modalTitleUpdate } from '../constants';
import '../style/TaskItem.scss';

class TaskItem extends PureComponent {
	constructor(props){
		super(props);

		this.state = {
			showModal: false
		}
	}

	onUpdate = (task) => {
		//this.props.handleUpdate(this.props.task);
		const { handleUpdate } = this.props;
		console.log('task in item',task)
		handleUpdate(task);
		this.closeModal();
	}

	onRemove = () => {
		this.props.handleRemove(this.props.task);
	}

	openModal = () => {
		this.setState({ showModal: true });
	}

	closeModal = () => {
		this.setState({ showModal: false });
	}

  render() {
		const { task } = this.props;

    return (
			<li className="TaskItem">
				<div className="content">
					<span className="title">{task.title}</span>
					<span className="desc">{task.description}</span>
				</div>
				<div className="actions">
					<button onClick={this.openModal}>Change</button>
					<button onClick={this.onRemove}>Remove</button>
				</div>
				<Modal modalTitle={modalTitleUpdate} showModal={this.state.showModal} closeModal={this.closeModal}>
					<TaskForm btnText={btnTextUpdate} taskDetails={task} onSubmit={this.onUpdate} />
				</Modal>
			</li>
    );
  }
}

export default TaskItem;
