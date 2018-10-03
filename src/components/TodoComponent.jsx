import * as React from 'react';
import ErrorBoundary from './ErrorBoundary';
import TodoFrom from './TodoForm';
import TodoList from './TodoList';

export default class TodoComponent extends React.Component {

    render() {

        return (
            <div>
                <h1>ToDO Component</h1>
                <ErrorBoundary>
                    <TodoFrom />
                </ErrorBoundary>
                <ErrorBoundary>
                    <TodoList />
                </ErrorBoundary>
            </div>
        )
    }
}