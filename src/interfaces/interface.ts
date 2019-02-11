export interface ITodoItem {
    title?: string;
    description?:string;
    id?: number;
    dispatch?:any
}

export type ITodoList = Array<ITodoItem>;

export interface ITodoListState {

}

export interface ITodoListProps{
    dispatch:any;
    TodoList:ITodoList
}

export interface ITodoItemState{

}

export interface ITodoPageProps{
    ShowTodoItem?:boolean;
    TodoSelection:Array<number>
    dispatch:any;
}

export interface ITodoPageState{

}

export interface ITodoItemProps{
    title?: string;
    description?:string;
    id?: number;
    dispatch?:any
    TodoSelection?:Array<number>
}

export interface IAppState{
    Todo:ITodoReducer
}

export interface IStore {
        dispatch: any,
        getState: () => IAppState
        subscribe: any;
}

export interface ITodoReducer{
     TodoList: ITodoList;
     ShowTodoItem:boolean;
     TodoItem:ITodoItem;
     TodoSelection:Array<number>;
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
    dispatch?:any;
    TodoItem:ITodoItem
}