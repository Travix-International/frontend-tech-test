import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton'
import {SortableElement, SortableHandle} from 'react-sortable-hoc';

import labels from 'app/routes/todo/data/labels'
// This can be any component you want
const DragHandle = SortableHandle(() =>
  <i className="zmdi zmdi-menu draggable-icon d-none d-sm-flex" style={{fontSize: 25}}/>);


const ToDoItem = SortableElement(({todo, onTodoSelect, onTodoChecked, onTodoBatchUpdate}) => {
  return (
    <div className="module-list-item">
      <div className="module-list-icon">
            <span className="bar-icon">
              <DragHandle/>
            </span>

        <Checkbox color="primary"
                  checked={todo.selected}
                  onClick={(event) => {
                    event.stopPropagation();
                    onTodoChecked(todo);
                  }}
                  value="SelectTodo"
        />

        <IconButton className="icon-btn" onClick={() => {
          todo.starred = !todo.starred;
          onTodoBatchUpdate([todo]);
        }}>
          {todo.starred ?
            <i className="zmdi zmdi-star"/> :
            <i className="zmdi zmdi-star-outline"/>
          }

        </IconButton>
      </div>
      <div className="module-list-info" onClick={() => {
        onTodoSelect(todo);
      }}>
        <div className="row">
          <div className="module-todo-content col-9 col-sm-10 col-md-11">
            <div className={`subject ${todo.completed && 'text-muted text-strikethrough'}`}>
              {todo.title}
            </div>
            <div className="manage-margin">
              {labels.map((label, index) => {
                return (todo.labels).includes(label.id) &&
                  <div key={index}
                       className={`badge text-white bg-${label.color}`}>{label.title}</div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
});

export default ToDoItem;