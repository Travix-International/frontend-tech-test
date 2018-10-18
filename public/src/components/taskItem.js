import React from 'react';
import ActionCreator from '../actions/actionCreator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import TodoInput from './todoInput';

library.add(faCheck, faPen, faTrash);

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    render() {
        var element;
        if (this.state.editMode) {
            element = (
                <TodoInput
                    editMode={true}
                    text={this.props.task.text}
                    updateTodo={this.updateTodo.bind(this)}
                />
            )
          } else {
            element = (
              <div className="view">
                <label>
                  {this.props.task.text}
                </label>
                <span onClick={() => { this.setState({editMode: true})}}>
                    <FontAwesomeIcon icon="pen" />
                </span>
                <span onClick={this.markCompleted.bind(this)}>
                    <FontAwesomeIcon icon="check" />
                </span>
                <span onClick={this.deleteTodo.bind(this)}>
                    <FontAwesomeIcon icon="trash" />
                </span>
              </div>
            )
          }

          return (
            <li>
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
            completed: true
        })
    }

    deleteTodo() {
        ActionCreator.sendDeleteMessage({
            taskId: this.props.task.id
        });
    }
}

export default TaskItem;