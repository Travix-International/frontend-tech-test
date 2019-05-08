import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log(state);
  return { tasks: state.tasks };
};
const ConnectedList = ({ tasks }) => {
  console.log(tasks);
  return (
    <ul className="list-group list-group-flush">
      {tasks.map(el => (
        <li className="list-group-item" key={el.id}>
          <div>{el.title}</div>
          <div>{el.description}</div>
        </li>
      ))}
    </ul>
  );
}

const TaskList = connect(mapStateToProps)(ConnectedList);

// class TodoList extends React.Component {
//     render() {
//       return (
//         <div>
//             <ul>
//               {this.props.tasks.map((todo)=>{
//                 return (
//                   <li key={todo.id}>
//                     <div>{todo.title}</div>
//                     <div>{todo.description}</div>
//                   </li>
//                 );
//               })}
//             </ul>
//         </div>
//       )
//     }
// }

export default TaskList
