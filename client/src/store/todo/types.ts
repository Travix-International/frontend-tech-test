import { Action } from "redux";
import Todo from "@models/Todo";
import TodoState from "./state";


export enum TodoActionTypes {
    FETCH_TODO = 'fetch-todo',
    FETCH_TODO_FAIL = 'fetch-todo-fail',
    FETCH_TODO_SUCCESS = 'fetch-todo-success',
    ADD_TODO = 'add-todo',
    TOGGLE_TODO = 'toggle-todo',
    EDIT_TODO = 'edit-todo',
    DELETE_TODO = 'delete-todo',
}

export interface FetchTodoAction extends Action {
    type: TodoActionTypes.FETCH_TODO;
}

export interface FetchTodoFailAction extends Action {
    type: TodoActionTypes.FETCH_TODO_FAIL;
    payload: { error: TodoState['error'] };
}

export interface FetchTodoSuccessAction extends Action {
    type: TodoActionTypes.FETCH_TODO_SUCCESS;
    payload: { todos: TodoState['todos'] };
}

export interface AddTodoAction extends Action {
    type: TodoActionTypes.ADD_TODO;
    payload: { todo: Todo };
}

export interface ToggleTodoAction extends Action {
    type: TodoActionTypes.TOGGLE_TODO;
    payload: { id: Todo['id'] };
}

export interface EditTodoAction extends Action {
    type: TodoActionTypes.EDIT_TODO;
    payload: { id: Todo['id'], title: Todo['title'], description: Todo['description'] };
}

export interface DeleteTodoAction extends Action {
    type: TodoActionTypes.DELETE_TODO;
    payload: { id: Todo['id'] };
}

export type TodoAction = FetchTodoAction | FetchTodoFailAction | FetchTodoSuccessAction | AddTodoAction | ToggleTodoAction | EditTodoAction | DeleteTodoAction;