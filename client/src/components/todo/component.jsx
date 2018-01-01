import React from 'react';
import PropTypes from 'prop-types';

import './styles.less';
import editIcon from './img/edit.svg';
import removeIcon from './img/remove.svg';

const Todo = props => (
    <div className="todo">
        <div className="todo__title">{props.title}</div>
        <div className="todo__description">{props.description}</div>
        <div className="todo__edit" onClick={props.onEdit}>
            <img src={editIcon} />
        </div>
        <div className="todo__remove" onClick={props.onDelete}>
            <img src={removeIcon} />
        </div>
    </div>
);

Todo.propTypes = {
    description: PropTypes.string,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    title: PropTypes.string,
};

Todo.defaultProps = {
    description: '',
    onEdit: () => {},
    onDelete: () => {},
    title: '',
};

export default Todo;
