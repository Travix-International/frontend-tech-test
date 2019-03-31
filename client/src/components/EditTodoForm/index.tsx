import React from 'react';
import TodoForm from '@components/TodoForm';

interface Props {
    title: string;
    description: string;
    onEdit: (title: string, description: string) => void;
    onCancel: () => void;
}

const EditTodoForm: React.FC<Props> = ({ title, description, onEdit, onCancel }) =>
    <TodoForm
        title={title}
        description={description}
        okText="Update"
        onOk={onEdit}
        onCancel={onCancel}
    />

export default EditTodoForm;