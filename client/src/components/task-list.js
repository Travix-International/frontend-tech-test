import React from 'react';
import './task-list.css';
import { connect } from "react-redux";
import { deleteTask } from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Task from './task';

const mapStateToProps = state => {
  console.log(state);
  return { tasks: [...state.tasks] };
};



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

    componentDidUpdate() {
      console.log("TASK LIST NEW PROPS = ",this.props)
    }

    delete = (e) => {
      e.preventDefault();
      console.log(e.currentTarget.parentNode.parentNode.id);
      let taskId = e.currentTarget.parentNode.parentNode.id;
      this.props.deleteTask({id:taskId});
    }
    
    render() {
      return (
        <div>
            <ul className="list-group list-group-flush">
              {this.props.tasks.map((task)=>{
                return (
                  // <li className="list-group-item" key={todo.id} id={todo.id}>
                  //    <div className="taskHeading">
                  //       <div>{todo.title}</div>
                  //       <FontAwesomeIcon onClick = {this.delete} icon="times" aria-hidden="true"/>
                  //     </div>
                  //   <div>{todo.description}</div>
                  // </li>
                  <Task key={task.id} task={task}/>
                );
              })}
            </ul>
        </div>
      )
    }
}
const TaskList = connect(mapStateToProps)(ConnectedList);

export default TaskList
