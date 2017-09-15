import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

// travix-ui-kit
import { Button, Checkbox, Tooltip, OverlayTrigger } from 'travix-ui-kit';

import style from './style.scss';

const propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
};

const Item = ({ todo, deleteTodo, editTodo }) => {
  const debounceUpdate = debounce(editTodo, 250);

  const handleTitleChange = (event, _todo) => (
    debounceUpdate({ ..._todo, title: event.target.value }, _todo.id)
  );

  return (
    <div className={style.item}>
      <Checkbox name={"todo"+todo.id} checked={todo.completed} className={style.active} onChange={() => editTodo({ ...todo, completed: !todo.completed }, todo.id)} size="xs">&nbsp;</Checkbox>
      <input className={`${style.editInput} ${todo.completed && style.completed}`} defaultValue={todo.title} onChange={e => handleTitleChange(e, todo)}/>
      <OverlayTrigger
        triggerAction="hover"
        elemToToggle={
          <Tooltip triggerAction="hover" active={true} position="left">Delete</Tooltip>
      }>
        <Button className={style.remove} onClick={() => deleteTodo(todo.id)} size="xs" mods={['remove']}>&times;</Button>
      </OverlayTrigger>
    </div>
  );
};

Item.propTypes = propTypes;

export default Item;
