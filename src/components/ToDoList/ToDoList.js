import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

class TodoList extends Component {
    static propTypes = {
        saveTask: PropTypes.func,
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
    makePayload = () =>{
        let { title, description } = this.state;
        return {
            title,
            description
        }
    }
    handleSubmit = (e) => {
        this.props.saveTask(this.makePayload());
        e.preventDefault();
    }
    handleKeyPress = () => {
        this.props.saveTask(this.makePayload());
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
                <button type="submit">Add</button>
            </form>
            </div>
        </div>
        );
    }
}

export default TodoList;