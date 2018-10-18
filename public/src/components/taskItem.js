import React from 'react';
import ActionCreator from '../actions/actionCreator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import TodoInput from './todoInput';

library.add(faCheck, faPenSquare, faTrash);

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    render() {
        var element;
        var task = this.props.task;
        if (this.state.editMode) {
            element = (
                <TodoInput
                    editMode={true}
                    text={task.text}
                    updateTodo={this.updateTodo.bind(this)}
                />
            )
          } else {
            element = (
              <div className={"todo-view" + (task.completed ? " complete" : "")}>
                <label className="todo-text">
                  {task.text}
                </label>
                <div className="todo-control">
                    <span className="todo-edit" title="edit" onClick={() => { this.setState({editMode: true})}}>
                        <FontAwesomeIcon icon="pen-square" />
                    </span>
                    <span className="todo-complete" title={task.completed ? "Undo Complete" : "Mark Complete"} onClick={this.markCompleted.bind(this)}>
                        <FontAwesomeIcon icon="check" />
                    </span>
                    <span className="todo-delete" title="Delete" onClick={this.deleteTodo.bind(this)}>
                        <FontAwesomeIcon icon="trash" />
                    </span>
                </div>
              </div>
            )
          }

          return (
            <li className={"todo-item " + (this.state.editMode ? "edit" : "view")}>
              {element}
            </li>
          )
    }

    updateTodo(text) {
        if(text !== this.props.task.text) {
            if(text.length === 0) {
                this.deleteTodo();
            } else {
                ActionCreator.sendUpdateMessage({
                    ...this.props.task,
                    text: text
                });
            }
        }
        this.setState({
            editMode: false
        })
    }

    markCompleted() {
        ActionCreator.sendCompleteMessage({
            ...this.props.task,
            completed: !this.props.task.completed
        })
    }

    deleteTodo() {
        ActionCreator.sendDeleteMessage({
            taskId: this.props.task.id
        });
    }
}

export default TaskItem;