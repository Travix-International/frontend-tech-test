import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const EditTask = (props) => {
  const {
    handleCloseSideBar, handleDeleteTask, selectedTask, handleEditTaskFormChange,
  } = props;
  return (
    <div id="view-todo">
      { !selectedTask.id ? <div />
        : (
          <form id="view-todo-container" onSubmit={(event)=>{event.preventDefault()}}>
            <div className="title">
              <input
                autoComplete="off"
                className="edit-input"
                name="title"
                onChange={handleEditTaskFormChange}
                placeholder="Edit tour task"
                type="text"
                value={selectedTask.title}

              />
            </div>
            <div className="description">
              <textarea
                autoComplete="off"
                name="description"
                onChange={handleEditTaskFormChange}
                value={selectedTask.description}
                placeholder="Add a description .. "

              />
            </div>
            <div className="controller">
              <FontAwesomeIcon
                className="close-view-todo-icon"
                icon={faArrowRight}
                onClick={() => { handleCloseSideBar(); }}
              />
              <FontAwesomeIcon

                className="delete-todo-icon"
                icon={faTrash}
                onClick={() => { handleDeleteTask(selectedTask); }}
              />

            </div>

          </form>
        )

      }

    </div>


  );
};
EditTask.propTypes = {
  handleCloseSideBar: PropTypes.func.isRequired,
  handleEditTaskFormChange: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
};

export default EditTask;
