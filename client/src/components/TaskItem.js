import React, {Component} from 'react';

export default class TaskItem extends Component {

    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
        this.state = {
            completed: this.props.task.completed
        }
    }

    deleteTask(id, e) {
        e && e.stopPropagation();
        this.props.deleteTask(id);
    }

    toggleTask(id, e) {
        this.props.toggleTask(id, !this.state.completed);
        this.setState({
            completed: !this.state.completed
        });
    }

    render() {
        const {task} = this.props;

        return (
            <li onClick={this.toggleTask.bind(this, task.id)}>
                <div>
                    <span><input checked={this.state.completed} type="checkbox" value={task.id} onChange={this.toggleTask.bind(this, task.id)} /></span>
                    <span className={this.state.completed ? 'completed' : 'pending'}>{task.title}</span>
                </div>
                <div className="btn-group">
                    <button className="btn">Edit</button>
                    <button onClick={this.deleteTask.bind(this, task.id)} className="btn last">Delete</button>
                </div>
            </li>
        )
    }
}