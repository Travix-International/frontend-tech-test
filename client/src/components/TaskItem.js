import React, {Component} from 'react';

export default class TaskItem extends Component {

    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(id, e) {
        this.props.deleteTask(id);
    }

    render() {
        const {task} = this.props;

        return (
            <li>
                <div>{task.title}</div>
                <div className="btn-group">
                    <button className="btn">Edit</button>
                    <button onClick={this.deleteTask.bind(this, task.id)} className="btn last">Delete</button>
                </div>
            </li>
        )
    }
}