import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { TaskType } from '../../constants/propTypes';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import styles from './Task.module.scss';

const Task = ({task, editTask, deleteTask}) => (
  <div className={styles.Task}>
    <Card>
      <div>
        <h1 className={styles.Title}>
          <Link to={`task/${task.id.toString()}`}>
            {task.title}
          </Link>
        </h1>
        <div className={styles.Description}>{task.description}</div>
        <div className={styles.Actions}>
          {editTask && 
            (<Button 
              onClick={() => editTask(task.id, encodeURI(task.title), encodeURI(task.description))}>
              Edit
            </Button>)}
          {deleteTask && (<Button 
            onClick={() => deleteTask(task.id)}>Delete</Button>)}
        </div>
      </div>
    </Card>
  </div>
)

Task.propTypes = {
  task: TaskType,
  editTask: PropTypes.func,
  deleteTask: PropTypes.func,
}

export default Task;