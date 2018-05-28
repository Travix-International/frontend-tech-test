import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Task from '../Task';
import './TodoList.css';
import 'react-toastify/dist/ReactToastify.css';
import * as Constants from '../../constants';
import Websocket from 'react-websocket';
import InfiniteScroll from 'react-infinite-scroll-component';

const NUM_OF_TODOS_IN_PAGE = 20;

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: props.tasks
    };
  }

  componentDidMount(){
    this.props.fetchTodos(NUM_OF_TODOS_IN_PAGE, 0);
  }

  createNewEmptyTodo(){
    this.props.createNewEmptyTodo(this.props.tasks);
  }

  renderTasks(){
    const { tasks } = this.props;
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
    data = JSON.parse(data);
    this.props.handleSocketMessage(data);
  }

  fetchMoreData = () => {
    const offset = this.props.tasks.length;
    this.props.fetchTodos(NUM_OF_TODOS_IN_PAGE, offset);
  }

  render() {
    return (
      <div className="todo-list">
        <Websocket url={Constants.WEBSOCKET_URL} onMessage={this.handleSocketMessage.bind(this)}/>
        <div className="col-md-12">
          <Button onClick={() => this.createNewEmptyTodo()} className="btn btn-success add-button">Add New TODO</Button>
        </div>
        <InfiniteScroll
          dataLength={this.props.tasks.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{textAlign: 'center'}}>
              <b>You have seen it all</b>
            </p>
          }>
          {this.renderTasks()}
        </InfiniteScroll>
      </div>
    );
  }
}

export default TodoList;
