import React from 'react';
import Todo from '@models/Todo';
import styles from './index.scss';
import Button from '@components/Button';

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
            <div onClick={onToggle}>CB</div>
            <div>
                <p className={styles.title}>{title}</p>
                <p>{description}</p>
            </div>
            <div>
                <Button onClick={onEdit}>edit</Button>
                <Button onClick={onDelete}>delete</Button>
            </div>
        </div>
    );
};

export default TodoItem;