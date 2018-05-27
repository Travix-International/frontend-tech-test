import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Task from '../Task';
import './TodoList.css';
import 'react-toastify/dist/ReactToastify.css';
import * as Constants from '../../constants';
import Websocket from 'react-websocket';


class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: props.tasks
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
       tasks: nextProps.tasks
    });
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  createNewEmptyTodo(){
    this.props.createNewEmptyTodo(this.props.tasks);
  }

  renderTasks(){
    const { tasks } = this.state;
    return (
        <div>
        {
          tasks.map(task => {
            return (
                <div className="col-md-4" key={task.id}>
                  <Task task={task} />
                </div>
            )
          })
        }
      </div>
    )
  }

  handleSocketMessage(data){
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="todo-list">
        <Websocket url={Constants.WEBSOCKET_URL} onMessage={this.handleSocketMessage.bind(this)}/>
        <div className="col-md-12">
          <Button onClick={() => this.createNewEmptyTodo()} className="btn btn-success add-button">Add New TODO</Button>
        </div>
        {
          this.renderTasks()
        }
      </div>
    );
  }
}

export default TodoList;
