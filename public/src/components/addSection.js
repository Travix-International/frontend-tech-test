import React from 'react';
import ActionCreator from '../actions/actionCreator';
import TodoInput from './todoInput';
import { connect } from 'react-redux';
import store from '../store';

class AddSection extends React.Component {
    render() {
        return (
            <div className="todo-input-holder">
                <TodoInput
                    placeholder="What's on your mind?"
                    addTodo={this.addTodo.bind(this)}
                />
            </div>
        );
    }

    addTodo(text) {
        ActionCreator.sendAddMessage({
            text: text
        });
    }
}

export default AddSection;