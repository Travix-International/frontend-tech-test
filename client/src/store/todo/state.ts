import Todo from '@models/Todo';

export default interface TodoState {
    todos: Todo[];
    pending: boolean;
    error: string | null;
}

export const initialTodoState: TodoState = {
    todos: [],
    pending: false,
    error: null,
};