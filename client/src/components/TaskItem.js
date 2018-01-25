import React, {Component} from 'react';
import ToggleDisplay from 'react-toggle-display';
import {parseBoolean} from '../utils/helpers'

export default class TaskItem extends Component {

    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
    }

    deleteTask(id, e) {
        e && e.stopPropagation();
        this.props.deleteTask(id);
    }

    toggleTask(task, e) {
        this.props.toggleTask(task.id, !task.completed);
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
            <li className={task.completed ? 'completed' : 'pending'} onClick={this.toggleTask.bind(this, {id: task.id, completed: task.completed})}>
                <div>
                    <span><input checked={task.completed} type="checkbox" value={task.id} onChange={this.toggleTask.bind(this, {id: task.id, completed: task.completed})} /></span>
                    <span className="title">{task.title}</span>
                    <ToggleDisplay show={!!task.description.length}>
                        <p>{task.description}</p>
                    </ToggleDisplay>
                </div>
                <div className="btn-group">
                    <button onClick={this.editTask.bind(this, task.id)} className="btn edit">Edit</button>
                    <button onClick={this.deleteTask.bind(this, task.id)} className="btn delete last">Delete</button>
                </div>
            </li>


        )
    }
}