import React from 'react';
import TodoForm from '@components/TodoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const okIcon = <FontAwesomeIcon icon={faCheck} />;
const cancelIcon = <FontAwesomeIcon icon={faTimes} />;

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
        okText={okIcon}
        cancelText={cancelIcon}
        onOk={onEdit}
        onCancel={onCancel}
    />

export default EditTodoForm;