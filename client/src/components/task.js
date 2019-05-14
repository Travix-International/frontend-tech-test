import React from 'react';
import { connect } from "react-redux";
import { deleteTask, editTask } from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TaskInput from './task-input';
import Aux from '../hoc/AuxFile';
import './task.css';

function mapDispatchToProps(dispatch) {
    return {
      deleteTask: taskId => dispatch(deleteTask(taskId)),
      editTask: task => dispatch(editTask(task))
    };
}

class connectedTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            title:this.props.task.title,
            description:this.props.task.description,
            completed:this.props.task.completed
        }
        this.delete = this.delete.bind(this);
        this.saveTitle = this.saveTitle.bind(this);
        this.saveDescription = this.saveDescription.bind(this);
    }


    delete = (e) => {
        e.preventDefault();
        let taskId = e.currentTarget.parentNode.parentNode.parentNode.id;
        this.props.deleteTask({id:parseInt(taskId, 10)});
    }

    handleDoubleClick = () => {
        this.setState({ editing: true })
    }
    

    saveTitle = (id, title) => {
        if (title.length === 0) {
            return;
        } else {
            this.props.editTask({id:id, title:title, description:this.props.task.description, completed:this.props.task.completed});
            this.setState({ editing: false });
        }
    }

    saveDescription = (id, description) => {
        if (description.length === 0) {
            return;
        } else {
            this.props.editTask({id:id, title:this.props.task.title, description:description, completed:this.props.task.completed});
            this.setState({ editing: false });
        }
    }

    toggleTaskCompletion = () => {
        this.setState((prevState)=>({ completed: !prevState.completed }),()=>{
            this.props.editTask({id:this.props.task.id, title:this.props.task.title, description:this.props.task.description, completed:this.state.completed});
        });
        
    }

    render() {
        const { title, description, id} = this.props.task;
        const index  = this.props.index;
        let element;
        if (this.state.editing) {
            element = (
                <tr key={id} id={id}>
                    <td className="cell-text">{index}</td>
                    <td className="cell-text" title={title}>
                        <TaskInput text={this.state.title}
                                name="title"
                                editing={this.state.editing}
                                onSave={(text) => this.saveTitle(id, text)} />
                    </td>
                    <td className="cell-text" title={description}>
                        <TaskInput text={this.state.description}
                                name="description"
                                editing={this.state.editing}
                                onSave={(text) => this.saveDescription(id, text)} />
                    </td>
                    <td className="action-text">
                        <div className="actionContainer">
                            <FontAwesomeIcon id="fa-icon" onClick = {this.delete} icon="trash-alt" aria-hidden="true"/>
                        </div>
                    </td>
                </tr>
            )
        } else {
            element = (
                <tr key={id} id={id} className={this.props.task.completed? 'completed' : null}>
                    <td className="cell-text">{index}</td>
                    <td className="cell-text" title={title}>
                        <label className="cell-text-data" onDoubleClick={this.handleDoubleClick}>
                             {title}
                        </label>
                    </td>
                    <td className="cell-text" title={description}>
                        <label className="cell-text-data" onDoubleClick={this.handleDoubleClick}>
                            {description}
                        </label>
                    </td>
                    <td className="action-text">
                        <div className="actionContainer">
                            <FontAwesomeIcon className="fa-icon" onClick = {this.delete} icon="trash-alt" aria-hidden="true" title="delete task"/>
                            { !this.state.completed &&
                                <FontAwesomeIcon 
                                    className="fa-icon" title="complete task" onClick = {this.toggleTaskCompletion} icon="check" aria-hidden="true" />}
                            { this.state.completed &&
                                <FontAwesomeIcon 
                                    className="fa-icon" title="undo complete-task" onClick = {this.toggleTaskCompletion} icon="times" aria-hidden="true"/>}
                        </div>
                    </td>
                </tr>
            )
        }
        return (
            <Aux>
                {element}
            </Aux>
        )
    }
}

const Task = connect(null, mapDispatchToProps)(connectedTask);

export default Task;