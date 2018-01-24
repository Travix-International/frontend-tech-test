import React, {Component} from 'react';
import ToggleDisplay from 'react-toggle-display';

export default class TaskItem extends Component {

    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
        //console.log('tasks status:', this.props.task.title, this.props.task.completed);
        this.state = {
            completed: this.props.task.completed,
            id: this.props.task.id
        }
    }

    deleteTask(id, e) {
        e && e.stopPropagation();
        this.props.deleteTask(id);
    }

    toggleTask(id, e) {
        this.props.toggleTask(id, !this.state.completed);
        this.setState({
            completed: this.state.completed
        });
        //get a fresh copy of all tasks
        this.props.getAllTasks();
    }

    editTask(id, e) {
        e && e.stopPropagation();
        this.props.editTask(id);
    }

    render() {
        const {task} = this.props;

        return (
            <li className={this.state.completed ? 'completed' : 'pending'} onClick={this.toggleTask.bind(this, task.id)}>
                <div>
                    <span><input checked={this.state.completed} type="checkbox" value={task.id} onChange={this.toggleTask.bind(this, task.id)} /></span>
                    <span className="title">{task.title}</span>
                    <ToggleDisplay show={!!task.description.length}>
                        <p>{task.description}</p>
                    </ToggleDisplay>
                </div>
                <div className="btn-group">
                    <button onClick={this.editTask.bind(this, this.state.id)} className="btn">Edit</button>
                    <button onClick={this.deleteTask.bind(this, task.id)} className="btn last">Delete</button>
                </div>
            </li>


        )
    }
}