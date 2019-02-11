import * as React from 'react';
import { connect } from 'react-redux';
import { ITodoItemState, ITodoItemProps, ITodoItem, ITodoPageProps, IAppState } from '../interfaces/interface';
import service_call from '../api/api';
import { API_TYPE, API_URLS } from '../api/api_urls';
import todo_actions from './../actions/todo.actions'
import socket_connection from '../api/socket.connection';
class TodoItem extends React.Component<ITodoItemProps, ITodoItemState>{
    constructor(props) {
        super(props);
    }
    editItem = () => {
        service_call.makeServiceCall(API_URLS.TASK(this.props.id), API_TYPE.GET)
            .then((response: { task: ITodoItem }) => {  
                this.props.dispatch(todo_actions.openTodoModal(response.task));
            })
    }
    deleteItem = () => {
        service_call.makeServiceCall(API_URLS.DELETETASK(this.props.id), API_TYPE.DELETE)
            .then((response: any) => {
                socket_connection.socket.emit('itemsAltered'); 
            })
    }
    onItemClicked = () => {
        this.props.dispatch(todo_actions.updateTodoSelection(this.props.id));
    }
    isChecked=()=>{
        return this.props.TodoSelection.includes(this.props.id)
    }
    render() {
        console.log('props', this.props)
        return (
            <div className='todo-item'>
                <div>
                    <div className={this.isChecked()?'checkbox-checked':'checkbox'} onClick={this.onItemClicked}></div>
                </div>
                <div className='details'>
                    <div className='title'>{this.props.title}</div>
                    <div className='desc'>{this.props.description}</div>
                </div>
                <div className='action' style={this.props.TodoSelection.length === 0 ? {} : { visibility: 'hidden' }}>
                    <button className='blue-btn' onClick={this.editItem}>EDIT</button>
                    <button className='red-btn' onClick={this.deleteItem}>DELETE</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state: IAppState) => {
    return {
        TodoList: state.Todo.TodoList,
        TodoSelection: state.Todo.TodoSelection
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
)(TodoItem)