import React, {Component} from 'react';

class TasksList extends Component {

    render () {
        const {tasks} = this.props;
        return (
           <ol className="todos">
               {tasks.map((v,k) => <li key={k}>{v.title}</li>)}
           </ol>
        )
    }
}

export default TasksList;