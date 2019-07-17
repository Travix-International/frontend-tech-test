import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchTasks, addTask, editTask, deleteTask } from '../../store/actions/taskActions';
import Loader from '../../components/UI/Loader/Loader';
import TaskList from '../../components/TaskList/TaskList';
import Modal from '../../components/UI/Modal/Modal';
import AddTask from '../../components/AddTask/AddTask';
import Button from '../../components/UI/Button/Button';

const TaskManager = props => {
  
  const { isLoading, tasks } = props;
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ editMode, setEditMode ] = useState(false);
  const [ editData, setEditData ] = useState(null);

  useEffect(() => {
    props.fetchTasks();
  }, []);

  const handleEdit = (id, title, description) => {
    setEditMode(id);
    setEditData({
      id,
      title,
      description
    });
    setModalOpen(true);
  }

  const handleClose = () => {
    setModalOpen(false);
    setEditMode(false);
    setEditData(null);
  }

  return (
    <div>
      {isLoading && <Loader />}
      {modalOpen && (
        <Modal closeModal={handleClose}>
          <AddTask 
            handleAddTask={props.addTask} 
            handleEditTask={props.editTask}
            editMode={editMode} 
            handleClose={handleClose}
            editData={editData} />
        </Modal>
      )}
      <div>
        <Button onClick={() => setModalOpen(true)}>Add Task</Button>
      </div>
      <div>
        <TaskList editTask={handleEdit} deleteTask={props.deleteTask} tasks={tasks} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  tasks: state.task.tasks,
  isLoading: state.task.isLoading,
});

export default connect(mapStateToProps, { fetchTasks, addTask, editTask, deleteTask })(TaskManager);
