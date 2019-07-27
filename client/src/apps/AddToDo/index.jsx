import React from 'react';
import TextField from 'sleek-ui/Input';
import Button from 'sleek-ui/Button';
import styled from 'styled-components';
import Notification, { NOTIFICATION_POSITION } from 'sleek-ui/Notification';
import './index.scss';

const TodoBlock = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
`;

export default class AddToDo extends React.Component {
    
    state = {
        todoTitle: '',
        todoDesc: ''
    }

    addToDo = () => {
        const {
            todoTitle,
            todoDesc
        } = this.state;
        this.props.addToDo(todoTitle, todoDesc).then(() => {
            this.setState({
                todoDesc: '',
                todoTitle: ''
            });
            Notification.add(NOTIFICATION_POSITION.TOP_RIGHT, {
                type: 'success',
                title: 'Success',
                content: 'Task added successfully.',
                state: 'success',
                key: 'added-notification'
            })
        });
    }

    onChange = (value) => {
        this.setState({
            todoTitle: value
        });
    }

    onDescChange = (value) => {
        this.setState({
            todoDesc: value
        });
    }

    render() {
        const {
            todoTitle,
            todoDesc
        } = this.state;
        const {
            taskCreateInProgress
        } = this.props;
        return (
            <TodoBlock>
                <TextField 
                    classNamePrefix='todo-field'
                    hintText='Enter title'
                    displayName='Add todo'
                    onChange={this.onChange}
                    value={todoTitle}
                />
                <TextField 
                    classNamePrefix='todo-field'
                    hintText='Enter description'
                    onChange={this.onDescChange}
                    value={todoDesc}
                />
                <Button
                    classNamePrefix='add'
                    label='Submit'
                    onClick={this.addToDo}
                    disabled={
                        taskCreateInProgress ||
                        todoTitle.trim() === '' || todoDesc.trim() === ''}
                />
            </TodoBlock>
        );
    }
}

