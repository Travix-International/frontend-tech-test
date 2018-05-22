import React, {Component} from 'react';
import Task from '../task/task';
import EditTask from '../edit-task/edit-task';


// TodoTable is a Stateless component

const TasksList = (props) => {
  return (

    <div className="container">
      <div className="row">
        <div className="col">
          {/* This maps the todos recieved as a prop */}

          {props
            .tasks
            .map(task => {

              // If the todo is being edited, EditTodo Component is rendered here
              if (task) {
                if (task.editing) {
                  return <EditTask
                    editTask={props.editTask}
                    cancelEditing={e => props.cancelEditing(task.id)}
                    key={task.id}
                    task={task}/>
                } else {

                  // Is the todo is not being edited the TodoRow stateless component is returned

                  return <Task
                    task={task}
                    key={task.id}
                    completeTask={e => props.completeTask(task)}
                    startEditing={e => props.startEditing(task.id)}
                    deleteTask={e => props.deleteTask(task)}
                  />
                }
              }
            })}

          {/* This EditTodo component is used as a Create new Todo Component */}
          {/* Thus by using the same component for both use, we can reuse a lot of the codes */}

          <EditTask createTask={props.createTask}/>
        </div>
      </div>
    </div>
  )
};

export default TasksList;