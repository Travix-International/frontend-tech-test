import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchAllTasks, addNewTasks, updateTask, deleteTask } from '../../actions/toDoActions';  
import { Well, ProgressBar } from 'react-bootstrap';
import ToDoList from './toDoList';
import AddToDo from './addToDo';

export class TodoManager extends Component {
    constructor(props) {
        super(props);
        this.props.fetchAllTasks();
    }
    
    render() {
       
        let progressBar;
        if(this.props.fetching){
            progressBar = <ProgressBar active now={100}  label='Fetching task list'/>;
         } else {
            progressBar = "";
        }

        if(this.props.errorRetriving){
            return (
                <p>Error while retriving the tasks, please check that the server is running</p>
            );
        }

        return (
            <div>
                {progressBar}
                <Well>
                    <h2>Add ToDo Task:</h2>
                    <AddToDo adding={this.props.adding} addTask={this.props.addNewTasks} errorAdding={this.props.errorAdding} />
                </Well>
                <Well>
                    <h2> TODO List </h2>
                    <ToDoList tasksList={this.props.tasks} updateTask={this.props.updateTask} deleteTask={this.props.deleteTask} 
                        errorUpdating={this.props.errorUpdating} updated={this.props.updated} updating={this.props.updating}/>
                </Well>
            </div>
        );
    }
}
  
  // AppContainer.js
  const mapStateToProps = (state, ownProps) => ({  
    fetching: state.todo.fetching,
    adding: state.todo.adding,
    updated: state.todo.updated,
    updating: state.todo.updating,
    errorRetriving: state.todo.errorRetriving,
    errorAdding: state.todo.errorAdding,
    errorUpdating: state.todo.errorUpdating,
    tasks: state.todo.tasks
  });
  
  const mapDispatchToProps = {  
    fetchAllTasks,
    addNewTasks,
    updateTask,
    deleteTask
  };
  
  const TodoManagerContainer = connect(  
    mapStateToProps,
    mapDispatchToProps
  )(TodoManager);
  
export default TodoManagerContainer;  
