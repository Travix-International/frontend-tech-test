import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { addTodo } from '../../actions/todoActions';

const initialState = () => {
  return {
    title: '',
    description: ''
  };
};

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = initialState();
    this.updateState = this.updateState.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
  }

  updateState(field, e){
    this.setState({[field]: e.target.value});
  }

  saveTodo(e){
    e.preventDefault();
    const todo = {title: this.state.title, description: this.state.description, complete: false};
    this.setState(initialState());
    this.inpTitle.value = '';
    this.inpDesc.value = '';
    this.context.store.dispatch(addTodo(todo));
  }

  render(){
    return (
      <div class="todo-form">
        <div class="todo-form-container">
          <div class="todo-form-control"><input class="todo-form-title" ref={(elm) => this.inpTitle = elm} type="text" name="title"  vale={this.state.title} placeholder={'title'} onChange={this.updateState.bind(this, 'title')} /></div>
          <div class="todo-form-control"><input class="todo-form-description" ref={(elm) => this.inpDesc = elm} type="text" name="description" vale={this.state.description} placeholder={'description'} onChange={this.updateState.bind(this, 'description')} /></div>
          <div class="todo-form-control"><button class="todo-form-button" onClick={this.saveTodo}>add</button></div>
        </div>
      </div>
    );
  }
}

TodoForm.contextTypes = {
  store: PropTypes.object
};

export default TodoForm;