import { TodoActionTypes, FetchTodoFailAction, FetchTodoAction, FetchTodoSuccessAction, AddTodoAction, TodoAction, EditTodoAction, DeleteTodoAction, ToggleTodoAction } from "./types";
import * as TodoAPI from '@services/todoApi';
import Todo from "@models/Todo";
import { ThunkDispatch } from "redux-thunk";
import ApplicationState from "./state";

export const fetchTodos = () =>
    (dispatch: ThunkDispatch<ApplicationState, {}, TodoAction>) => {
        dispatch({
            type: TodoActionTypes.FETCH_TODO,
        } as FetchTodoAction);

        TodoAPI.fetchTodos()
            .then(data => {
                dispatch({
                    type: TodoActionTypes.FETCH_TODO_SUCCESS,
                    payload: {
                        todos: data.tasks,
                    },
                } as FetchTodoSuccessAction)
            })
            .catch(err => {
                dispatch({
                    type: TodoActionTypes.FETCH_TODO_FAIL,
                    payload: {
                        error: err.message,
                    }
                } as FetchTodoFailAction);
            });
    };

export const addTodo = (title: Todo['title'], description: Todo['description']) =>
    (dispatch: ThunkDispatch<ApplicationState, {}, TodoAction>) => {
        TodoAPI.addTodo({ title, description })
            .then(todo => {
                dispatch({
                    type: TodoActionTypes.ADD_TODO,
                    payload: { todo },
                } as AddTodoAction)
            })
            .catch(err => { return; });
    };

export const editTodo = (id: Todo['id'], data: { title: Todo['title'], description: Todo['description'] }) =>
    (dispatch: ThunkDispatch<ApplicationState, {}, TodoAction>) => {
        TodoAPI.editTodo(id, data)
            .then(() => {
                dispatch({
                    type: TodoActionTypes.EDIT_TODO,
                    payload: {
                        id,
                        title: data.title,
                        description: data.description,
                    },
                } as EditTodoAction);
            })
            .catch(err => { return; });
    };

export const toggleTodo = (id: Todo['id']) =>
    (dispatch: ThunkDispatch<ApplicationState, {}, TodoAction>) => {
        TodoAPI.toggleTodo(id)
            .then(() => {
                dispatch({
                    type: TodoActionTypes.TOGGLE_TODO,
                    payload: { id },
                } as ToggleTodoAction);
            })
            .catch(err => {
                return;
            });
    };

export const deleteTodo = (id: Todo['id']) =>
    (dispatch: ThunkDispatch<ApplicationState, {}, TodoAction>) => {
        TodoAPI.deleteTodo(id)
            .then(() => {
                dispatch({
                    type: TodoActionTypes.DELETE_TODO,
                    payload: { id },
                } as DeleteTodoAction);
            })
            .catch(err => { return; });
    };

