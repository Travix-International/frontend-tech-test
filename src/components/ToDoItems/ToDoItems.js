import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItems extends Component {
    static propTypes = {
        deleteTask: PropTypes.func,
        tasks: PropTypes.array,
    };
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
        };
    }
    deleteTasks(id) {
        this.props.deleteTask(id);
    }

    render() {
        let { tasks } =  this.props;

        return (
            <ul className="theList">
                {
                    tasks ?
                        tasks.map(task => (
                        <li key={task.id}>
                            <h1>{task.title}</h1>
                            <p>{task.description}</p>
                            <button onClick={this.deleteTasks.bind(this, task.id)}>Delete</button>
                        </li>
                    ))
                    : null
                }
            </ul>
        );
    }
};

export default ToDoItems;