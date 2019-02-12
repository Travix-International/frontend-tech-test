import { Dispatch } from "react";
import { Action } from "redux";

export interface ITodoItem {
    title?: string;
    description?:string;
    id?: number;
    dispatch?:Dispatch<Action>
}

export type ITodoList = Array<ITodoItem>;

export interface ITodoListState {
    activePage:number;
    perPage:number;
    totalRecords:number;
}

export interface ITodoListProps{
    dispatch:Dispatch<Action>;
    TodoList:ITodoList
}

export interface ITodoItemState{

}

export interface ITodoPageProps{
    ShowTodoItem?:boolean;
    TodoSelection:Array<number>
    dispatch:Dispatch<Action>;
}

export interface ITodoPageState{

}

export interface ITodoItemProps{
    title?: string;
    description?:string;
    id?: number;
    dispatch?:Dispatch<Action>
    TodoSelection?:Array<number>
}

export interface IAppState{
    Todo:ITodoReducer
}

export interface IStore {
        dispatch: Dispatch<Action>,
        getState: () => IAppState
        subscribe: Dispatch<Action>;
}

export interface ITodoReducer{
     TodoList: ITodoList;
     ShowTodoItem:boolean;
     TodoItem:ITodoItem;
     TodoSelection:Array<number>;
     ShowToast:boolean;
     ToastConfig:IToast
}

export enum ServiceCallType{
    GET,
    POST
}

export interface IServiceCallConfig{
    url:string;
    reqType:ServiceCallType;
    payload:{
        [x:string]:any
    }
}

export interface ITodoItemModalState{
    titleErr?:string;
    apiErr?:string;
}

export interface ITodoItemModalProps{
    dispatch?:Dispatch<Action>;
    TodoItem:ITodoItem
}

export interface IPaginationProps{
    totalRecords:number;
    activePage:number;
    perPage:number;
    onPageChange:Function
}

export interface IPaginationState{
    currentQueue:Array<number>;
    activePage:number;
    totalRecords:number;
}
export enum ToastType {
    SUCCESS,
    FAILURE
}
export interface IToast{
    message?:string;
    type?:ToastType 
}

export interface IToastProps{
    dispatch?:Dispatch<Action>;
    message?:string;
    type?:ToastType;
    ShowToast:boolean;
    ToastConfig:IToast 
}
export interface IToastState{

}