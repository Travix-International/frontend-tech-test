import React from 'react';
import TodoForm from '@components/TodoForm';

interface Props {
    onAdd: (title: string, description: string) => void;
    onCancel: () => void;
}

const AddTodoForm: React.FC<Props> = ({ onAdd, onCancel }) =>
    <TodoForm
        okText="Add"
        onOk={onAdd}
        onCancel={onCancel}
    />

export default AddTodoForm;