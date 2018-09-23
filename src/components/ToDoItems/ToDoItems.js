import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import TodoList from '../ToDoList/ToDoList';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ToDoItems extends Component {
    static propTypes = {
        deleteTask: PropTypes.func,
        updateTask: PropTypes.func,
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
        let { tasks, updateTask } =  this.props;
        let { isEdit, itemToEdit } =  this.state;

        return (
            <div>
            <Modal
                isOpen={isEdit}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Edit Modal"
                ariaHideApp={false}
            >
            <TodoList itemToEdit={itemToEdit} updateTask={updateTask} />
            </Modal>
            <TodoList itemToEdit={itemToEdit} updateTask={updateTask} />
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
            </div>
        );
    }
};

export default ToDoItems;