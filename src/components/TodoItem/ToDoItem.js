import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TodoList from '../TodoList/TodoList';
import Button from '../Button/Button';

import './TodoItem.css';

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

class TodoItem extends Component {
    static propTypes = {
        deleteTask: PropTypes.func,
        updateTask: PropTypes.func,
        tasks: PropTypes.array,
        areTasksLoaded: PropTypes.bool,
    };
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            itemToEdit: null,
        };
    }
    deleteTasks = (id) => (e) => {
        e.preventDefault();
        this.props.deleteTask(id);
    }

    editTasks = (itemId) => (e) => {
        e.preventDefault();
        let editItemId = document.getElementById(itemId);
        this.setState({
            isEdit: true,
            itemToEdit: editItemId.id,
        });
    }
    closeModal = () => {
        this.setState({
            isEdit: false,
        });
    }

    render() {
        let { tasks, updateTask, areTasksLoaded } =  this.props;
        let { isEdit, itemToEdit } =  this.state;

        return (
            <div>
            <Modal
                isOpen={isEdit}
                shouldCloseOnOverlayClick={false}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Edit Modal"
                ariaHideApp={false}
            >
            <div className="close__modal" onClick={this.closeModal}>
                <FontAwesomeIcon icon="times"/>
            </div>
            <TodoList itemToEdit={itemToEdit} updateTask={updateTask} closeModal={this.closeModal} />
            </Modal>
            <ul className="list">
                {
                    areTasksLoaded ? tasks.map((task, index) => (
                        <li key={index} id={task.id}>
                            <div className="left">
                                <h1>{task.title}</h1>
                                <p>{task.description}</p>
                            </div>
                            <div className="right">
                                <Button
                                    className="btn btn__del"
                                    text="Delete"
                                    type="button"
                                    onAction={ this.deleteTasks(task.id) }
                                />
                                <Button
                                    className="btn btn__edit"
                                    text="Edit"
                                    type="button"
                                    onAction={ this.editTasks(task.id) }
                                />
                            </div>
                        </li>
                    ))
                    : null
                }
            </ul>
            </div>
        );
    }
};

export default TodoItem;