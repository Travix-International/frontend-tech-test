import React from 'react';
import Todo from '@models/Todo';
import EditableTodo from '@components/EditableTodo';

interface Props {
    todos: Todo[];
    onEdit?: (id: Todo['id'], data: { title: string, description: string }) => void;
    onDelete?: (id: Todo['id']) => void;
    onToggle?: (id: Todo['id']) => void;
}

const TodoList: React.FC<Props> = ({ todos, ...rest }) => {
    return (
        <>
            {todos.map((todo: Todo) => (
                <EditableTodo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    done={todo.done}
                    {...rest}
                />
            ))}
        </>
    );
};

export default TodoList;