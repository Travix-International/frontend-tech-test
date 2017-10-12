import React from 'react';
import { connect } from 'react-redux';
import { ListItem, Divider } from 'material-ui';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';

import '../content/styles/components/todoListItem.scss';

import {
  updateTodoIsCompleted,
  openDeleteDialog,
  deleteTodo,
  openEditTodoDialog
} from '../store/actions/index';

class TodoListItem extends React.Component { 
  constructor(props) {
      super(props);
      this.toggleTodoIsCompleted = this.toggleTodoIsCompleted.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
      this.editTodo = this.editTodo.bind(this);
  }

  toggleTodoIsCompleted() {
    var isCompleted = this.props.item.isCompleted ? this.props.item.isCompleted : false;

    this.props.onToggleTodoIsCompleted(this.props.item.id, !isCompleted);
  }

  deleteTodo() {
    this.props.onConfirmDeleteTodo(this.props.item.id);
  }

  editTodo() {
    this.props.onEditTodo(this.props.item);
  }

  render() {
    var className = 'list-item';

    if (this.props.item.isCompleted)
    {
      className += ' list-item-completed'
    }

    return (
      	<div>
            <ListItem
              leftCheckbox={<Checkbox checked={this.props.item.isCompleted} onCheck={this.toggleTodoIsCompleted} className="list-item-checkbox"/>}
              primaryText={this.props.item.title} 
              secondaryText={this.props.item.description} 
              className={className} >
              <div className="button-container">
                <IconButton className="button-todo-edit" onClick={this.editTodo} disableTouchRipple disabled={this.props.item.isCompleted}>
                    <EditorModeEdit />
                </IconButton>
                <IconButton className="button-todo-delete" onClick={this.deleteTodo} disableTouchRipple >
                  <ActionDelete />
                </IconButton>
              </div>
            </ListItem>
            <Divider />
        </div>      	
    	);
 	}
};

var mapStateToProps = (state) => {
  return {
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
  	onToggleTodoIsCompleted: (id, isCompleted) => {      
      dispatch(updateTodoIsCompleted(id, isCompleted));
    },
    onConfirmDeleteTodo: (id) => {      
      dispatch(openDeleteDialog(id));
    },
    onEditTodo: (todo) => {
      dispatch(openEditTodoDialog(todo));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);