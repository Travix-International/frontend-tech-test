import * as React from 'react';
import TodoList from './../components/todolist.component';
import { connect } from 'react-redux';
import { IAppState, ITodoListProps, ITodoListState, ITodoPageState, ITodoPageProps, ITodoItem, ToastType } from '../interfaces/interface';
import './../styles/todo.page.scss';
import todo_actions from './../actions/todo.actions'
import TodoItemModal from './../components/tdoitemmodal.component'
import service_call, { SUCCESS_CODES } from '../api/api';
import { API_URLS, API_TYPE } from '../api/api_urls';
import socket_connection from '../api/socket.connection';

class TodoPage extends React.Component<ITodoPageProps, ITodoPageState>{
    constructor(props) {
        super(props);
    }
    create = () => {
        this.props.dispatch(todo_actions.openTodoModal({} as ITodoItem))
    }
    delete = () => {
        let ids = this.props.TodoSelection.join(',');
        service_call.makeServiceCall(API_URLS.DELETETASK(ids), API_TYPE.DELETE)
        .then((response: any) => {
            if(SUCCESS_CODES.includes(response.status)){
                this.props.dispatch(todo_actions.showToast({message:response.message||'Todo Item Deleted Successfully',type:ToastType.SUCCESS}))
                socket_connection.socket.emit('itemsAltered'); 
                this.props.dispatch(todo_actions.clearTodoSelection())
            }else{
                this.props.dispatch(todo_actions.showToast({message:response.message||'Unable To Delete Todo Item',type:ToastType.FAILURE}))
                this.props.dispatch(todo_actions.clearTodoSelection())
            }
            
        })
    }
    render() {
        return (
            <div className='todo-page'>
                <div>
                    {
                    this.props.TodoSelection.length == 0 &&<button className='green-btn' onClick={this.create}>CREATE</button>
                    }
                    {
                    this.props.TodoSelection.length > 0 &&<button className='red-btn' onClick={this.delete}>DELETE</button>
                    }
                </div>
                <div className='todo-heading'> TODO LIST </div>
                <div><TodoList /></div>
                <div>{this.props.ShowTodoItem && <TodoItemModal/>}</div>
            </div>
        )
    }
}
const mapStateToProps = (state: IAppState) => {
    return {
        TodoList: state.Todo.TodoList,
        ShowTodoItem: state.Todo.ShowTodoItem,
        TodoSelection:state.Todo.TodoSelection
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
)(TodoPage)