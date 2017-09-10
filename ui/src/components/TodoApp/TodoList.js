import React  from 'react';

import TodoListItem from "./TodoListItem";

export default ({tasks, onTodoDelete, onTodoUpdate, onTodoModeChange}) => {
    const list = tasks.map((item, key) => {
        return <TodoListItem item={item} key={key} onTodoDelete={onTodoDelete} onTodoUpdate={onTodoUpdate} onTodoModeChange={onTodoModeChange} />
    });
    return (
        <div className="todo-list">
            {list}
        </div>
    )
}
