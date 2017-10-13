import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BubbleLoader } from 'react-css-loaders';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TodoList from './components/todoList';
import DeleteDialog from './components/dialogs/deleteDialog';
import AddTodoDialog from './components/dialogs/addTodoDialog';
import EditTodoDialog from './components/dialogs/editTodoDialog';

import './content/styles/app.scss';

import {
  openAddTodoDialog
} from './store/actions/index';

class App extends React.Component { 
  render() {
    var loader = this.props.isLoading ? <BubbleLoader color='#E53D82'/> : undefined;    
  	return (
      <MuiThemeProvider id="MainContainerThemeProvider">
    		<div id="MainContainer">
  	        <div className="container">
  	        	<h1>Todo List</h1>
              <FloatingActionButton className="add-todo-button" onClick={this.props.onOpenAddTodoDialog} label="Add Todo" secondary={true} >
                <ContentAdd />
              </FloatingActionButton>
  	        	<TodoList />
  	        </div>
  	        {loader}
            <AddTodoDialog />
            <EditTodoDialog />
            <DeleteDialog />
  	    </div> 
      </MuiThemeProvider>       	
    	);
 	}
};

var mapStateToProps = (state) => {
  return {
    isLoading: state.session.isLoading,
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
    onOpenAddTodoDialog: () => {      
      dispatch(openAddTodoDialog());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);