import React from 'react';
import Todo from '@models/Todo';
import styles from './index.scss';
import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface Props {
    id: Todo['id'];
    title: Todo['title'];
    description: Todo['description'];
    done: Todo['done'];
    onEdit: () => void;
    onDelete: () => void;
    onToggle: () => void;
}

const TodoItem: React.FC<Props> = ({id, title, description, done, onToggle, onEdit, onDelete}) => {
    return(
        <div className={`${styles.container} ${done ? styles.done : ''}`}>
            <div className={styles.status} onClick={onToggle}>
                <Checkbox checked={done} />
            </div>
            <div className={styles.main}>
                <p className={styles.title}>{title}</p>
                <p className={styles.desc}>{description}</p>
            </div>
            <div className={styles.actions}>
                <Button type="icon" onClick={onEdit}>
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button type="icon" onClick={onDelete}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            </div>
        </div>
    );
};

export default TodoItem;