import * as React from 'react';
import { connect } from 'react-redux';
import { ITodoItemState, ITodoItemProps, ITodoItem, IAppState, ITodoItemModalProps, ITodoItemModalState, ITodoList, ToastType } from '../interfaces/interface';
import todo_actions from '../actions/todo.actions';
import service_call, { SUCCESS_CODES } from '../api/api';
import { API_URLS, API_TYPE } from '../api/api_urls';
import './../styles/todoitem.modal.scss'
import socket_connection from '../api/socket.connection';
class TodoItemModal extends React.Component<ITodoItemModalProps, ITodoItemModalState>{
    todoItemTitle;
    todoItemDesc;
    constructor(props) {
        super(props);
        this.state = {
            titleErr: '',
            apiErr: ''
        }
        this.todoItemTitle = React.createRef();
        this.todoItemDesc = React.createRef();
    }
    componentDidMount() {
        this.todoItemTitle.current.focus();
        if (Number(this.props.TodoItem.id)) {
            this.todoItemTitle.current.value = this.props.TodoItem.title;
            this.todoItemDesc.current.value = this.props.TodoItem.description
            this.forceUpdate();
        }
    }
    saveTodoItem = (payload) => {
        const URL = Number(payload.id) ? API_URLS.UPDATETASK(payload.id, payload.title, payload.description) : API_URLS.CREATETASK(payload.title, payload.description);
        const METHOD = Number(payload.id) ? API_TYPE.PUT : API_TYPE.POST
        service_call.makeServiceCall(URL, METHOD)
            .then((response: any) => {
                if (SUCCESS_CODES.includes(response.status)) {
                    this.props.dispatch(todo_actions.showToast({message:'Todo Item Created Successfully',type:ToastType.SUCCESS}))
                    socket_connection.socket.emit('itemsAltered'); 
                    this.props.dispatch(todo_actions.closeTodoModal());
                } else {
                    this.setState({ apiErr: response.message })
                }
            })
    }
    onSave = () => {
        let title = this.todoItemTitle.current.value;
        let description = this.todoItemDesc.current.value;
        let id = this.props.TodoItem.id;
        let isValid = true;
        let titleErr = ''
        if (!title) {
            isValid = true;
            titleErr = 'Please enter a title'
        }
        if (!isValid) {
            this.setState({ titleErr });
            return
        }
        this.saveTodoItem({ id, title, description });

    }
    onCancel = () => {
        this.props.dispatch(todo_actions.closeTodoModal());
    }
    render() {
        return (
            <div className='modal' onClick={(e)=>e.preventDefault()}>
                <div className="todo-item-modal">
                    <div>
                        <input placeholder='Title' type='text' ref={this.todoItemTitle}></input>
                        <span>{this.state.titleErr}</span>
                    </div>
                    <div>
                        <textarea placeholder='Description' name='desc' ref={this.todoItemDesc}></textarea>
                    </div>
                    <div>
                        <button className='green-btn' onClick={this.onSave}>{Number(this.props.TodoItem.id) ? 'Update' : 'Add'}</button>
                        <button className='red-btn' onClick={this.onCancel}>{'Cancel'}</button>
                    </div>
                    <div className="err-txt">{this.state.apiErr}</div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state: IAppState) => {
    return {
        TodoItem: state.Todo.TodoItem
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
)(TodoItemModal)