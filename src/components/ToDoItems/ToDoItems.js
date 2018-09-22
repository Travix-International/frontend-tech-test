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
            itemToEdit: null,
        };
    }
    deleteTasks(id) {
        this.props.deleteTask(id);
    }

    editTasks(itemId) {
        let editItemId = document.getElementById(itemId);
        this.setState({
            isEdit: true,
            itemToEdit: Number(editItemId.id),
        });

    }

    render() {
        let { tasks } =  this.props;

        return (
            <ul className="theList">
                {
                    tasks.length > 0 ?
                        tasks.map(task => (
                        <li key={task.id} id={task.id}>
                            <h1>{task.title}</h1>
                            <p>{task.description}</p>
                            <button onClick={ this.deleteTasks.bind(this, (task.id)) }>Delete</button>
                            <button onClick={ this.editTasks.bind(this, (task.id)) }>Edit</button>
                        </li>
                    ))
                    : null
                }
            </ul>
        );
    }
};

export default ToDoItems;