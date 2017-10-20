import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchAllTasks } from '../../actions/toDoActions';  
import { Well } from 'react-bootstrap';
import ToDoList from './toDoList';
import AddToDo from './addToDo';

export class TodoManager extends Component {
    constructor(props) {
        super(props);
        this.props.fetchAllTasks();
    }

    render() {

        if(this.props.fetching){
            return (
                <p>Loading tasks. PLease hold on to your hat...</p>
            );
        }

        if(this.props.error){
            return (
                <p>Error while retriving the tasks, please check that the server is running</p>
            );
        }

        return (
            <div>
                <Well>
                    <h2>Add ToDo Task:</h2>
                    <AddToDo />
                </Well>
            
                <Well>
                    <h2> TODO List </h2>
                    <ToDoList tasksList={this.props.tasks}/>
                </Well>
            </div>
        );
    }
}
  
  // AppContainer.js
  const mapStateToProps = (state, ownProps) => ({  
    fetching: state.todo.fetching,
    error: state.todo.error,
    tasks: state.todo.tasks
  });
  
  const mapDispatchToProps = {  
    fetchAllTasks
  };
  
  const TodoManagerContainer = connect(  
    mapStateToProps,
    mapDispatchToProps
  )(TodoManager);
  
export default TodoManagerContainer;  
