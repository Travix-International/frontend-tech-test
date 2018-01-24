import React, {Component} from 'react';
import TaskItem from './TaskItem';
import ToggleDisplay from 'react-toggle-display';

class TasksList extends Component {

    render () {

        const {tasks} = this.props;
        const completedTasks = tasks.filter(task => task.completed);

        return (
           <div>
               <ol className="todos">
                   {tasks.filter(task => !task.completed).map((task,index) => <TaskItem {...this.props} key={index} task={task} />)}
               </ol>

               <ToggleDisplay show={completedTasks.length}>
                   <h3>completed tasks</h3>
                   <ol className="todos">
                    {completedTasks.map((task,index) => <TaskItem {...this.props} key={index} task={task} />)}
                   </ol>
               </ToggleDisplay>
           </div>
        )
    }
}

export default TasksList;