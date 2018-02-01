import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { addTodo } from '../../actions/todoActions';

const initialState = () => {
  return {
    title: '',
    description: ''
  };
}

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = initialState();
    this.setTitle = this.setTitle.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
  }

  setTitle(e){
    this.setState({title: e.target.value})
  }

  setDescription(e){
    this.setState({desc: e.target.value})
  }

  saveTodo(e){
    e.preventDefault();
    const todo = {title: this.state.title, description: this.state.desc};
    this.setState(initialState());
    this.context.store.dispatch(addTodo(todo));
  }

  render(){
    return (
      <div class="todo-form">
        <div class="todo-form-container">
          <div class="todo-form-control"><input vale={this.state.title} placeholder={'title'} onChange={this.setTitle} /></div>
          <div class="todo-form-control"><input vale={this.state.description} placeholder={'description'} onChange={this.setDescription} /></div>
          <div class="todo-form-control"><button onClick={this.saveTodo}>add</button></div>
        </div>
      </div>
    );
  }
}

TodoForm.contextTypes = {
  store: PropTypes.object
};

TodoForm.propTypes = {
  dispatch: PropTypes.func
};

export default TodoForm;