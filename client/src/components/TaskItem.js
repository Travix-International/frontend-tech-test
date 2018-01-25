import React, {Component} from 'react';
import ToggleDisplay from 'react-toggle-display';

export default class TaskItem extends Component {

    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(id, e) {
        e && e.stopPropagation();
        this.props.deleteTask(id);
    }

    toggleTask(id, e) {
        this.props.toggleTask(id, !this.state.completed);
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
            <li className={task.completed ? 'completed' : 'pending'} onClick={this.toggleTask.bind(this, task.id)}>
                <div>
                    <span><input checked={task.completed} type="checkbox" value={task.id} onChange={this.toggleTask.bind(this, task.id)} /></span>
                    <span className="title">{task.title}</span>
                    <ToggleDisplay show={!!task.description.length}>
                        <p>{task.description}</p>
                    </ToggleDisplay>
                </div>
                <div className="btn-group">
                    <button onClick={this.editTask.bind(this, task.id)} className="btn">Edit</button>
                    <button onClick={this.deleteTask.bind(this, task.id)} className="btn last">Delete</button>
                </div>
            </li>


        )
    }
}