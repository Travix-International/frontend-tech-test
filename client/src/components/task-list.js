import React from 'react';
import './task-list.css';
import { connect } from "react-redux";
import Task from './task';
import { getTasks } from '../actions/index';

const mapStateToProps = state => {
  return { tasks: [...state.filteredTasks] };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(getTasks())
  }
}

class ConnectedList extends React.Component {
    componentDidMount() {
      this.props.fetchTasks();
    }

    render() {
      return (
        <div className="tableContainer table-responsive">
            <table className="dataTable table table-dark table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="dataTable-body">
                  {this.props.tasks.map((task, index)=>{
                    return (
                        <Task key={task.id} task={task} index={index}/>
                    );
                  })}
                </tbody>
            </table>
        </div>
      )
    }
}
const TaskList = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default TaskList
