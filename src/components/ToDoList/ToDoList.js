import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

class TodoList extends Component {
    static propTypes = {
        saveTask: PropTypes.func,
        editTask: PropTypes.func,
    };
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        };
    }
    onInputChange = (value, key) => {
        this.setState({
            [key]: value,
        });
    }
    makeNewTaskPayload = () =>{
        let { title, description } = this.state;
        return {
            title,
            description
        }
    }
    handleSubmit = (e) => {
        this.props.saveTask(this.makeNewTaskPayload());
        this.clearInputs();
        e.preventDefault();
    }
    handleKeyPress = () => {
        this.props.saveTask(this.makeNewTaskPayload());
        this.clearInputs();
    }

    areInputsEmpty = () => {
        if (this.state.title && this.state.description) {
            return true;
        }
        return false;
    }
    clearInputs = () => {
        this.setState({
            title: '',
            description: '',
        });
    }
    render() {
        let { description, title } = this.state;
        return (
        <div className="todoListMain">
            <div className="header">
            <form onSubmit={this.handleSubmit}>
                <div>
                    <Input
                        name="title"
                        type="text"
                        onInputChange={this.onInputChange}
                        onSubmit={this.handleKeyPress}
                        value={title}
                    />
                 </div>
                <div>
                    <Input
                        name="description"
                        type="text"
                        onInputChange={this.onInputChange}
                        onSubmit={this.handleKeyPress}
                        value={description}
                    />
                </div>
                <button className={this.areInputsEmpty() ? 'but' : 'but disabled'} type="submit">Add</button>
            </form>
            </div>
        </div>
        );
    }
}

export default TodoList;