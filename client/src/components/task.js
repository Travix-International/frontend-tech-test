import React from 'react';
import { connect } from "react-redux";
import { deleteTask, editTask } from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TaskInput from './task-input';

function mapDispatchToProps(dispatch) {
    return {
      deleteTask: taskId => dispatch(deleteTask(taskId)),
      editTask: task => dispatch(editTask(task))
    };
}

class connectedTask extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            editing: false
        }
        this.delete = this.delete.bind(this);
        this.saveTitle = this.saveTitle.bind(this);
        this.saveDescription = this.saveDescription.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("TASK NEW PROPS = ",this.props);
    }

    delete = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.parentNode.parentNode.parentNode);
        console.log(e.currentTarget.previousSibling);
        let taskId = e.currentTarget.parentNode.parentNode.parentNode.id;
        this.props.deleteTask({id:parseInt(taskId, 10)});
    }

    handleDoubleClick = () => {
        this.setState({ editing: true })
    }
    

    saveTitle = (id, title) => {
        if (title.length === 0) {
            return;
        } else if (title !== this.props.task.title) {
            this.props.editTask({id:id, title:title, description:this.props.task.description});
            this.setState({ editing: false });
        }
    }

    saveDescription = (id, description) => {
        if (description.length === 0) {
            return;
        } else if (description !== this.props.task.description) {
            this.props.editTask({id:id, title:this.props.task.title, description:description});
            this.setState({ editing: false });
        }
    }

    render() {
        const { title, description, id } = this.props.task;
        let element;
        if (this.state.editing) {
            element = (
                <div>
                    <div className="taskHeading">
                        <TaskInput text={title}
                                name="title"
                                editing={this.state.editing}
                                onSave={(text) => this.saveTitle(id, text)} />
                        <FontAwesomeIcon onClick = {this.delete} icon="times" aria-hidden="true"/>
                    </div>
                    <TaskInput text={description}
                                name="description"
                                editing={this.state.editing}
                                onSave={(text) => this.saveDescription(id, text)} />
                </div>
                )
        } else {
            element = (
                <div>
                    <div className="taskHeading">
                        <label onDoubleClick={this.handleDoubleClick}>
                            {title}
                        </label>
                        <FontAwesomeIcon onClick = {this.delete} icon="times" aria-hidden="true"/>
                    </div>
                    <label onDoubleClick={this.handleDoubleClick}>
                        {description}
                    </label>
                </div>
            )
        }
        return (
            <li className="list-group-item" key={id} id={id}>
                {element}
            </li>
        )
    }
}

const Task = connect(null, mapDispatchToProps)(connectedTask);

export default Task;