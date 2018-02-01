import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { removeTodo, editTodo } from '../../actions/todoActions';

const initialState = () => {
  return {
    id: null,
    title: '',
    description: '',
    complete: false
  }
};

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = initialState();
    this.updateTitle = this.updateTitle.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
    this.updateDesc = this.updateDesc.bind(this);
    this.saveDesc = this.saveDesc.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  saveTitle(e){
    e.preventDefault();
    this.setState({updateTitle: false});
    this.props.dispatch(editTodo({
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      complete: this.state.complete
    }));
  }

  updateTitle(e){
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  saveDesc(e){
    e.preventDefault();
    this.setState({updateDesc: false});
    this.props.dispatch(editTodo({
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      complete: this.state.complete
    }));
  }

  updateDesc(e){
    e.preventDefault();
    this.setState({description: e.target.value});
  }

  removeTodo(e){
    e.preventDefault();
    this.props.dispatch(removeTodo(this.props.id));
  }

  changeColor(id) {
    this.todoElm.classList.remove('yellow', 'blue', 'purple');
    switch(id){
      case 1:
        this.todoElm.classList.add('yellow');
        break;
      case 2:
        this.todoElm.classList.add('blue');
        break;
      case 3:
        this.todoElm.classList.add('purple');
        break;
      default:
        break;
    }
  }

  toggleTodo(e){
    e.preventDefault();
    const flag = this.state.complete ? false : true;
    this.setState({complete: flag});
    this.props.dispatch(editTodo({
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      complete: this.state.complete
    }));
  }

  componentWillMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      complete: this.props.complete
    });
  }

  componentWillUnMount(){
    this.setState(initialState());
  }

  render(){
    return (
      <div class="todo" ref={(elm) => this.todoElm = elm}>
        <div class="todo-title-content">
          <input placeholder={'Title'} disabled={this.state.complete} class="todo-title" onClick={this.focusElement} onChange={this.updateTitle} onBlur={this.saveTitle} value={this.state.title} />
        </div>
        <div class="todo-description-content">
          <textarea placeholder={'Description'} disabled={this.state.complete} class="todo-description" onClick={this.focusElement} onChange={this.updateDesc} onBlur={this.saveDesc} value={this.state.description}></textarea>
        </div>
        <i class="fa fa-thumbtack todo-pin"></i>
        <i class="fa fa-trash todo-icon-delete" aria-hidden="true"></i>
        <i class="fa fa-check-circle todo-icon-complete"></i>
        <i class="todo-complete" onClick={this.toggleTodo}></i>
        <i class="todo-delete" onClick={this.removeTodo}></i>
        <div class="todo-colors">
          <span class="yellow" onClick={this.changeColor.bind(this, 1)}></span>
          <span class="blue" onClick={this.changeColor.bind(this, 2)}></span>
          <span class="purple" onClick={this.changeColor.bind(this, 3)}></span>
        </div>
        {this.state.complete ? <div class="todo-done">
          <span>- Done -</span>
        </div>: ''}
      </div>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  complete: PropTypes.bool,
  dispatch: PropTypes.func
};


export default Todo;