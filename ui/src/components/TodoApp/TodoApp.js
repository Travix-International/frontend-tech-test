import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addTodo, initTodoApp, updateTodoById, changeTodoModeById, deleteTodoById } from '../../actions/todos';

import TodoList from "./TodoList";

import fetch from 'isomorphic-fetch';

const fetchStatusHandler = (response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw response;
    }
};

class TodoApp extends Component {

    componentDidMount() {
        const t = this;

        t.initTodoApp();

        const socket = t.props.socket;

        socket.on('connect', function () {
            socket.on('new_task', function (payload) {
                t.props.addTodo(payload);
            });
            socket.on('update_task', function (id, payload) {
                t.props.updateTodoById(id, payload);
            });
            socket.on('delete_task', function (id) {
                t.props.deleteTodoById(id);
            });
        });
    };

    initTodoApp = () => {
        const t = this;

        fetch("http://localhost:9001/tasks").then(fetchStatusHandler).then(response => {
            t.props.initTodoApp(response.tasks);
        });
    };

    addTodo = (data) => {
        const t = this;

        fetch("http://localhost:9001/task/create", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(fetchStatusHandler).then(response => {
            t.props.addTodo(response.task);
            t.props.socket.emit("new_task", response.task);
            t.resetForm();
        }).catch(errors => {
            errors.json().then(_=> {
                console.log(_);
            })
        });
    };

    updateTodoById = (id, data) => {
        const t = this;

        id = parseInt(id, 10);

        fetch("http://localhost:9001/task/update/"+id, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(fetchStatusHandler).then(response => {
            t.props.updateTodoById(id, response.task);
            t.props.socket.emit("update_task", id, response.task);
        }).catch(errors => {
            console.log(errors);
            errors.json().then(_=> {
                console.log(_);
            })
        });
    };

    changeTodoModeById = (id, mode) => {
        const t = this;
        t.props.changeTodoModeById(id, mode);
    };

    deleteTodoById = (id) => {
        const t = this;

        id = parseInt(id, 10);

        fetch("http://localhost:9001/task/delete/"+id, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(fetchStatusHandler).then(() => {
            t.props.deleteTodoById(id);
            t.props.socket.emit("delete_task", id);
        }).catch(errors => {
            errors.json().then(_=> {
                console.log(_);
            })
        });
    };

    onInputKeyDown = (e) => {
        const t = this;

        if(e.keyCode === 13) {
            e.preventDefault();
            t.textarea.focus()
        }
    };

    onTextareaKeyDown = (e) => {
        const t = this;

        if(e.keyCode === 13 && (e.metaKey || e.ctrlKey)) { //cmd or ctrl + enter to save todoitem
            e.preventDefault();
            t.handleFormSubmit(e);
        }
    };

    handleFormSubmit = (e) => {
        const t = this;

        e.preventDefault();
        t.input.blur();
        t.textarea.blur();

        t.addTodo({
            title: t.input.value,
            description: t.textarea.value
        });
    };

    resetForm = () => {
        const t = this;
        t.input.value = "";
        t.textarea.value = "";
    };

    render() {
        const t = this;
        const todos = t.props.todos;

        return (
            <div className="todo">
                <h1 className="todo-headline">TodoApp <span className="todo-count">{todos.length}</span></h1>

                <div className="todo-wrapper">

                    <form className="todo-form" name="todoForm" onSubmit={t.handleFormSubmit}>
                        <div className="todo-input">
                            <input ref={n=>t.input=n} id="title" name="title" placeholder="Title" className="input" onKeyDown={t.onInputKeyDown} />
                            <textarea ref={n=>t.textarea=n} id="description" name="description" className="input" placeholder="Leave a note" onKeyDown={t.onTextareaKeyDown} />
                        </div>
                        <button className="todo-btn" type="submit">Done</button>
                    </form>

                    <TodoList tasks={todos} onTodoDelete={t.deleteTodoById} onTodoUpdate={t.updateTodoById} onTodoModeChange={t.changeTodoModeById}/>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initTodoApp: data => {
            dispatch(initTodoApp(data));
        },
        addTodo: (data) => {
            dispatch(addTodo(data));
        },
        updateTodoById: (id, data) => {
            dispatch(updateTodoById(id, data));
        },
        changeTodoModeById: (id, mode) => {
            dispatch(changeTodoModeById(id, mode));
        },
        deleteTodoById: id => {
            dispatch(deleteTodoById(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)