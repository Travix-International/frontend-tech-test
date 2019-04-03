import React from 'react';
import TodoForm from '@components/TodoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';

const okIcon = <FontAwesomeIcon icon={faPaperPlane} />
const cancelIcon = <FontAwesomeIcon icon={faTimes} />

interface Props {
    onAdd: (title: string, description: string) => void;
    onCancel: () => void;
}

const AddTodoForm: React.FC<Props> = ({ onAdd, onCancel }) =>
    <TodoForm
        okText={okIcon}
        cancelText={cancelIcon}
        onOk={onAdd}
        onCancel={onCancel}
    />

export default AddTodoForm;