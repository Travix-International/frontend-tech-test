import * as React from 'react';
import TodoItem from './todoitem.component';
import { connect } from 'react-redux';
import { IAppState, ITodoList, ITodoListProps, ITodoListState, IPaginationProps } from '../interfaces/interface';
import service_call from '../api/api';
import { API_URLS, API_TYPE } from '../api/api_urls';
import todo_actions from './../actions/todo.actions';
import socket_connection from '../api/socket.connection';
import Pagination from './pagination.component';

class TodoList extends React.Component<ITodoListProps, ITodoListState>{
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            perPage: 10,
            totalRecords:0
        }
        socket_connection.socket.on('itemsAltered', (todoList) => {
            this.props.dispatch(todo_actions.saveTodoItemsList(todoList))
            this.setState({totalRecords:todoList.length})
        })
    }
    componentDidMount() {
        service_call.makeServiceCall(API_URLS.TASKLIST, API_TYPE.GET)
            .then((response: { tasks: ITodoList }) => {
                console.log({ response })
                this.props.dispatch(todo_actions.saveTodoItemsList(response.tasks))
                this.setState({totalRecords:response.tasks.length})
            })
    }
    paginate(array = [], perPage, activePage = 1) {
        return array.slice((activePage - 1) * perPage, activePage * perPage);
    }
    onPageChange = (activePage) => {
        this.setState({ activePage })
    }
    render() {
        return (
            <div>
                <div className='todo-list'>
                    {
                        this.paginate(this.props.TodoList, this.state.perPage, this.state.activePage).map((todoItem) => {
                            return <TodoItem {...todoItem}{...{ key: `todo-item-${todoItem.id}` }} />
                        })}
                    {
                        this.props.TodoList.length === 0 && <div className='no-records'>No Items</div>
                    }
                </div>
                <Pagination {...{
                    totalRecords: this.props.TodoList.length,
                    activePage: this.state.activePage,
                    perPage: this.state.perPage,
                    onPageChange: this.onPageChange
                }} />
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