import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import styles from './AddTask.module.scss';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import TextArea from '../UI/TextArea/TextArea';
import { TaskType } from '../../constants/propTypes';

const AddTask = ({editMode, handleAddTask, editData, handleClose, handleEditTask}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if(editData){
      setTitle(decodeURI(editData.title));
      setDescription(decodeURI(editData.description));
    }
  }, [editMode])

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!title || !description) {
      alert('please fill all inputs');
      return;
    }
    if(editMode !== false) {
      handleEditTask(editData.id, title, description, handleClose);
    } else {
      handleAddTask(title, description, handleClose);
    }
  }

  return(
    <form className={styles.AddTask} onSubmit={handleSubmit}>
      <div className={styles.Row}>
        <Input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" />
      </div>
      <div className={styles.Row}>
        <TextArea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Description" />
      </div>
      <div className={`${styles.Row} ${styles.Button}`}>
        <Button type="submit">
          {editMode ? "Edit" : "Add"} Task
        </Button>
      </div>
    </form>
  )
}

AddTask.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  editMode: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  editData: TaskType,
  handleClose: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired
}

AddTask.defaultProps = {
  editMode: false,
  editData: {
    id: 0,
    title: '',
    description: ''
  }
}

export default AddTask;