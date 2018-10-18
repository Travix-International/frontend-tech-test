import React from 'react';
import ActionCreator from '../actions/actionCreator';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text || ''
        }
    }

    render() {
        return (
            <input
                className={"todo-input form-control " + (this.props.editMode ? "edit-mode" : "")}
                type="text"
                autoFocus={true}
                value={this.state.text}
                placeholder={this.props.placeholder || ''}
                onChange={this.handleTextInput.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onKeyDown={this.handleSave.bind(this)}
                />
        )
    }

    handleTextInput(event) {
        this.setState({
            text: event.target.value
        })
    }

    handleSave(event) {

        if (event.which === 13) {
            var text = event.target.value.trim();
            if(this.props.editMode) {
                this.props.updateTodo(text);
            } else {
                this.props.addTodo(text);
            }

            this.setState({
                text: ''
            })
        }
    }

    handleBlur(event) {
        if(this.props.editMode) {
            var text = event.target.value.trim();
            this.props.updateTodo(text);
        }
    }
}

export default TodoInput;