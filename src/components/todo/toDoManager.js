import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchAllTasks, addNewTasks, updateTask } from '../../actions/toDoActions';  
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
                    <ToDoList tasksList={this.props.tasks} updateTask={this.props.updateTask}/>
                </Well>
            </div>
        );
    }
}
  
  // AppContainer.js
  const mapStateToProps = (state, ownProps) => ({  
    fetching: state.todo.fetching,
    errorRetriving: state.todo.errorRetriving,
    adding: state.todo.adding,
    errorAdding: state.todo.errorAdding,
    tasks: state.todo.tasks
  });
  
  const mapDispatchToProps = {  
    fetchAllTasks,
    addNewTasks,
    updateTask
  };
  
  const TodoManagerContainer = connect(  
    mapStateToProps,
    mapDispatchToProps
  )(TodoManager);
  
export default TodoManagerContainer;  
