import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { removeTodo, editTodo } from '../../actions/todoActions';

const initialState = () => {
  return {
    id: null,
    title: '',
    description: '',
    updateTitle: false,
    updateDesc: false
  }
};

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = initialState();
    this.editTitle = this.editTitle.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
    this.editDesc = this.editDesc.bind(this);
    this.updateDesc = this.updateDesc.bind(this);
    this.saveDesc = this.saveDesc.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  editTitle(e){
    e.preventDefault();
    this.setState({updateTitle: true});
    document.querySelector('.todo-title').focus();
  }

  saveTitle(e){
    e.preventDefault();
    this.setState({updateTitle: false});
    this.props.dispatch(editTodo({
      id: this.state.id,
      title: this.state.title,
      description: this.state.description
    }));
  }

  updateTitle(e){
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  editDesc(e){
    e.preventDefault();
    this.setState({updateDesc: true});
    document.querySelector('.todo-description').focus();
  }

  saveDesc(e){
    e.preventDefault();
    this.setState({updateDesc: false});
    this.props.dispatch(editTodo({
      id: this.state.id,
      title: this.state.title,
      description: this.state.description
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

  componentWillMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      description: this.props.description
    });
  }

  componentWillUnMount(){
    this.setState(initialState());
  }

  render(){
    return (
      <div class="todo" ref={(elm) => this.todoElm = elm}>
        <div class="todo-title-content">
          {this.state.updateTitle ? <input placeholder={'Title'} class="todo-title" onChange={this.updateTitle} onBlur={this.saveTitle} value={this.state.title} /> :
          <h3 class="todo-title" onClick={this.editTitle}>{this.state.title}</h3>}
        </div>
        <div class="todo-description-content">
          {this.state.updateDesc ? <textarea placeholder={'Description'} class="todo-description" onChange={this.updateDesc} onBlur={this.saveDesc} value={this.state.description}></textarea> :
          <p class="todo-description" onClick={this.editDesc}>{this.state.description}</p>}
        </div>
        <i class="fa fa-thumbtack todo-pin"></i>
        <i class="fa fa-trash todo-icon-delete" aria-hidden="true"></i>
        <i class="todo-delete" onClick={this.removeTodo}></i>
        <div class="todo-colors">
          <span class="yellow" onClick={this.changeColor.bind(this, 1)}></span>
          <span class="blue" onClick={this.changeColor.bind(this, 2)}></span>
          <span class="purple" onClick={this.changeColor.bind(this, 3)}></span>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  dispatch: PropTypes.func
};


export default Todo;