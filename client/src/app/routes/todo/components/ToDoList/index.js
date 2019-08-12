import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import ToDoItem from './ToDoItem';
import CustomScrollbars from 'util/CustomScrollbars';

const ToDoList = SortableContainer(({toDos, onTodoSelect, onTodoChecked, onTodoBatchUpdate, width}) => {
  return (
    <div className="module-list">
      <CustomScrollbars className="module-list-scroll scrollbar"
                        style={{height: width >= 1200 ? 'calc(100vh - 265px)' : 'calc(100vh - 245px)'}}>
        {toDos.map((todo, index) =>
          <ToDoItem key={index} index={index} todo={todo} onTodoSelect={onTodoSelect}
          onTodoBatchUpdate={onTodoBatchUpdate}
                    onTodoChecked={onTodoChecked}/>
        )}
      </CustomScrollbars>
    </div>
  )
});

export default ToDoList;