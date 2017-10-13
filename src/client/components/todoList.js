import React from 'react';
import { connect } from 'react-redux';
import { List, Divider } from 'material-ui';

import TodoListItem from './todoListItem';

import {
  loadTodos
} from '../store/actions/index';

class TodoList extends React.Component {
  constructor(props) {
      super(props);
      this.createTodos = this.createTodos.bind(this);
  }

	componentWillMount() {
		this.props.onLoad();
	}

  createTodos(item) {
    return  <TodoListItem key={item.id} item={item} />;
  }
 
  render() {
    var todoItems = this.props.todos.map(this.createTodos);
    
  	return (
      	<List className="todo-list">
      		{todoItems}
      	</List>      	
    	);
 	}
};

var mapStateToProps = (state) => {
  return {
    todos: state.session.todos,
    selectedTodoId: state.session.selectedTodoId
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
  	onLoad: () => {
  		dispatch(loadTodos());
  	}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);