import React, {Component} from 'react';
import TaskItem from './TaskItem';

class TasksList extends Component {

    render () {
        const {tasks} = this.props;
        return (
           <ol className="todos">
               {tasks.map((task,index) => <TaskItem {...this.props} key={index} task={task} />)}
           </ol>
        )
    }
}

export default TasksList;