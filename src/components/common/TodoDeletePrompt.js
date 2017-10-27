import React, { PropTypes } from "react";
import { Modal, Button } from 'travix-ui-kit';

// Todo delete component
const TodoDeletePrompt = ({show, todo, hideDelete, todoDelete}) => {
  const modalTitle = `Are you sure you want to delete ${todo.task}?`;
  
  return (
    <Modal
      active={show}
      title={modalTitle}
      closable={false}
      closeOnOverlayClick={false}
      closeOnEsc={false} >
      <Button size="s" onClick={hideDelete}>Close</Button>&nbsp;
      <Button size="s" onClick={todoDelete}>Delete</Button>
    </Modal>
  );
}

// prop checks
TodoDeletePrompt.propTypes = {
  show: PropTypes.bool.isRequired,
  todo: PropTypes.object.isRequired,
  hideDelete: PropTypes.func.isRequired,
  todoDelete: PropTypes.func.isRequired,
}

export default TodoDeletePrompt;