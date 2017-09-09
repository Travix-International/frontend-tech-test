/**
 * Created by maykinayki on 9/8/17.
 */

import React  from 'react';

export default ({item, onTodoDelete, onTodoUpdate, onTodoModeChange}) => {

    const content = item.mode === "update" ? (
        <form className="todo-form" onSubmit={(e) => {
            e.preventDefault();
            onTodoUpdate(item.id, new FormData(e.currentTarget));
        }}>
            <div className="todo-input">
                <input name="title" className="input" placeholder="Title" defaultValue={item.title} />
                <textarea name="description" className="input" autoFocus="autoFocus" placeholder="Leave a note" defaultValue={item.description} />
            </div>
            <button className="todo-btn" type="submit">Save</button>
            <button className="todo-btn cancel" type="button" onClick={()=> onTodoModeChange(item.id, "default")}>Cancel</button>
        </form>
    ) : (
        <label htmlFor="checkbox">
            <input className="todo-item--checkbox" type="checkbox" />
            <div className="todo-item">
                <div className="todo-item-inner">
                    <div className="title">{item.title}</div>
                    <div className="description">{item.description}</div>
                </div>
                <button className="todo-item--delete" onClick={()=> onTodoDelete(item.id)}>×</button>
                <button className="todo-item--edit" onClick={()=> onTodoModeChange(item.id, "update")}>
                    <svg fill="#FFFFFF" height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
            </div>
        </label>
    );

    return (
        <div className="todo-list-item">
            {content}
        </div>
    )
}