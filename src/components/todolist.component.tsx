import * as React from 'react';
import TodoItem from './todoitem.component';
import { connect } from 'react-redux';
import { IAppState, ITodoList, ITodoListProps, ITodoListState } from '../interfaces/interface';
import service_call from '../api/api';
import { API_URLS, API_TYPE } from '../api/api_urls';
import todo_actions from './../actions/todo.actions';
import socket_connection from '../api/socket.connection';

class TodoList extends React.Component<ITodoListProps, ITodoListState>{
    constructor(props) {
        super(props);
        socket_connection.socket.on('itemsAltered',(todoList)=>{
            this.props.dispatch(todo_actions.saveTodoItemsList(todoList))
        })
    }
    componentDidMount() {
        service_call.makeServiceCall(API_URLS.TASKLIST, API_TYPE.GET)
            .then((response: { tasks: ITodoList }) => {
                console.log({response})
                this.props.dispatch(todo_actions.saveTodoItemsList(response.tasks))
            })
    }
    render() {
        return (
            <div className='todo-list'>
                {this.props.TodoList.map((todoItem) => {
                    return <TodoItem {...todoItem}{...{key:`todo-item-${todoItem.id}`}} />
                })}
                {
                    this.props.TodoList.length === 0 && <div className='no-records'>No Items</div>
                }
            </div>
        )
    }
}
const mapStateToProps = (state: IAppState) => {
    return {
        TodoList: state.Todo.TodoList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)