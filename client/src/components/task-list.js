import React from 'react';
import './task-list.css';
import { connect } from "react-redux";
import Task from './task';
import { getTasks } from '../actions/index';

const mapStateToProps = state => {
  console.log(state);
  return { tasks: [...state.filteredTasks] };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(getTasks())
  }
}

// const ConnectedList = ({ tasks }) => {
//   console.log(tasks);
//   return (
//     <ul className="list-group list-group-flush">
//       {tasks.map(el => (
//         <li className="list-group-item" key={el.id}>
//           <div className="taskHeading">
//             <div>{el.title}</div>
//             <FontAwesomeIcon onClick = {this.delete} icon="times" aria-hidden="true"/>
//           </div>
//           <div>{el.description}</div>
//         </li>
//       ))}
//     </ul>
//   );
// }



class ConnectedList extends React.Component {
    constructor(props) {
      super(props)
      console.log(props)
      this.state = {
         
      }
    }

    componentDidMount() {
      console.log(this.props);
      this.props.fetchTasks();
    }

    componentDidUpdate() {
      console.log("TASK LIST NEW PROPS = ",this.props)
    }

    // delete = (e) => {
    //   e.preventDefault();
    //   console.log(e.currentTarget.parentNode.parentNode.id);
    //   let taskId = e.currentTarget.parentNode.parentNode.id;
    //   this.props.deleteTask({id:taskId});
    // } //deprecated - delete method inside task component
    
    render() {
      return (
        <div className="tableContainer table-responsive">
            {/* <ul className="list-group list-group-flush">
              {this.props.tasks.map((task)=>{
                return (
                  <Task key={task.id} task={task}/>
                );
              })}
            </ul> */}
            <table className="dataTable table table-bordered table-hover">
                <thead className="thead-light">
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
                      // <tr key={task.id}>
                      //     <td className="cell-text">{index}</td>
                      //     <td colSpan="2" className="cell-text" title={task.title}>{task.title}</td>
                      //     <td colSpan="2" className="cell-text" title={task.description}>{task.description}</td>
                      //     <td className="cell-text"><FontAwesomeIcon onClick = {this.delete} icon="times" aria-hidden="true"/></td>
                      // </tr>
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
