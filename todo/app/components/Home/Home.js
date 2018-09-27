import React from 'react';
import { connect } from 'react-redux';
import { Todo } from '../Todo/Todo';
import { Nav } from '../Nav/Nav';
import { TodoModal } from '../TodoModal/TodoModal';
import { findTodos, addTodo, editTodo, deleteTodo } from '../../actions/todo';
import { onTodoAdd, onEditTodo, onDeleteTodo } from '../../actions/socket-todo';
import { SOCKET_BASE_URL } from '../../constants';
import openSocket from 'socket.io-client';
const socket = openSocket(SOCKET_BASE_URL);


/**
 * @description Main Todo Feed Component
 * @author Syed Aibad Hashmi
 */
class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      from: 0,
      showModal: false,
      todos: props.todos,
      todo: {
        id: '',
        title: '',
        description: ''
      }
    }

    this.addTodoModal = this.addTodoModal.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.editTodoModal = this.editTodoModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.findTodo = this.findTodo.bind(this);

  }

  /**
   * @description React component lifecycle event
   * housing socket events
   */
  componentDidMount () {
    this.props.dispatch(findTodos(this.state.from, ''));
    socket.on('todo-add', (data) => {
      this.props.dispatch(onTodoAdd(data));
    });
    socket.on('todo-update', (data) => {
      this.props.dispatch(onEditTodo(data));
    });
    socket.on('todo-delete', (data) => {
      this.props.dispatch(onDeleteTodo(data));
    });
  }

  /**
   * @description Opens Add Todo Modal
   */
  addTodoModal () {
    const todo = {
      id: '',
      title: '',
      description: ''
    }
    this.setState({
      showModal: true,
      todo: todo
    });
  }

  /**
   * @description Closes Modal
   */
  closeModal () {
    this.setState({
      showModal: false
    });
  }

  handleSave () {
    if (this.state.todo.id.toString().trim() !== "") {
      this.props.dispatch(editTodo(this.state.todo));
    } else {
      this.props.dispatch(addTodo(this.state.todo));
    }
    this.setState({
      showModal: false
    });
  }

  editTodoModal (todo) {
    this.setState({
      showModal: true,
      todo: todo
    });
  }

  deleteTodo (id) {
    this.props.dispatch(deleteTodo(id));
  }

  /**
   * @description Returns list of todos to be rendered
   * @param todos 
   */
  renderTodos (todos) {
    const _todos = [];
    let counter = 0;
    todos.forEach((todo) => {
      _todos.push(
        <Todo 
          editTodoModal={this.editTodoModal} 
          id={todo.id} title={todo.title} 
          description={todo.description} 
          key={counter}
          deleteTodo={this.deleteTodo}>
        </Todo>
      );
      counter++;
    });
    return _todos;
  }

  /**
   * @description Go to Next Page
   */
  next () {
    let current = this.state.from + 10;
    this.setState({
      from:current
    });
    this.props.dispatch(findTodos(current, ''));
    window.scrollTo(0, 0);
  }

  /**
   * @description Go to Previous Page
   */
  previous () {
    let current = this.state.from - 10;
    this.setState({
      from:current
    });
    this.props.dispatch(findTodos(current, ''));
    window.scrollTo(0, 0);
  }

  /**
   * @description Searches the Todos for given text
   * @param value 
   */
  findTodo (value) {
    this.props.dispatch(findTodos(this.state.from, value));
  }

  render() {
    return (
      <div className="todo-app">
        <Nav findTodo={this.findTodo} addTodoModal={this.addTodoModal}></Nav>
        {
          this.state.showModal ? 
          <TodoModal 
            handleSave={this.handleSave} 
            todo={this.state.todo}
            closeModal={this.closeModal}>
          </TodoModal> :
          ''
        }
        <div className="todo-feed-container container">
          <div className="row todo-feed">
            <div className="todo-feed-col col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
              {
                this.props.todos.tasks.length ? 
                this.renderTodos(this.props.todos.tasks) : 
                ''
              }
              <div className="btn-group pagination-btn" role="group">
                <button type="button" className="btn btn-default" disabled={this.state.from === 0 ? true : false} onClick={this.previous.bind(this)}>previous</button>
                <button type="button" className="btn btn-default" disabled={(this.state.from + 10) >= this.props.todos.total ? true : false} onClick={this.next.bind(this)}>next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(Home);
