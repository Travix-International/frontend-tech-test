import React, { useState, memo, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import TaskDialog from '../task-dialog/TaskDialog';

import { getTasks, loadTask, deleteTask, loadTasks, editTask } from '../../redux/modules/tasks';

import './TaskList.scss';
import "react-table/react-table.css";

let TaskList = ({
  tasks, loading, loaded, error, dispatch
}) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  if (tasks.length === 0 && (loading || !loaded)) {
    return 'Loading...';
  }

  if (error) {
    return 'An error has occurred';
  }

  if (tasks.length === 0) {
    return (
      <Typography className="not-found" component="h2" variant="h5">
      No tasks found
      </Typography>
    );
  }

  const setComplete = (id, completed) => {
    const task = tasks.find(t => t.id === id);
    const {
      title, description
    } = task;
    
    dispatch(editTask(id, title, description, completed))
      .then(() => dispatch(loadTasks()));
  };

  const handleEdit = (e) => {
    const taskId = e.target.id;

    dispatch(loadTask(taskId))
      .then(() => {
        setId(taskId);
        setOpen(true);
      });
  };

  const handleDelete = (e) => {
    dispatch(deleteTask(e.target.id))
      .then(() => dispatch(loadTasks()));
  };

  return (
    <Fragment>
      {open && (
        <TaskDialog
          id={id}
          isEdit
          open={open}
          setOpen={setOpen}
        />
      )}
      <ReactTable
        className="task-list"
        data={tasks}
        minRows={tasks.length}
        columns={[
          {
            id: "checkbox",
            Header: "",
            accessor: (data) => {
              const completed = data.completed;

              return (
                <Checkbox
                  className="checkbox"
                  checked={completed || false}
                  color={completed ? 'default' : 'primary'}
                  onChange={() => setComplete(data.id, !completed)}
                />
              )
            },
          },
          {
            id: "id",
            Header: () => (
              <div style={{ textAlign:"left" }}>Id</div>
            ),
            accessor: (data) => <div className={data.completed ? 'completed' : ''}>{data.id}</div>,
          },
          {
            id: "title",
            Header: () => (
              <div style={{ textAlign:"left" }}>Title</div>
            ),
            accessor: (data) => <div className={data.completed ? 'completed' : ''}>{data.title}</div>,
          },
          {
            id: "description",
            Header: () => (
              <div style={{ textAlign:"left" }}>Description</div>
            ),
            accessor: (data) => <div className={data.completed ? 'completed' : ''}>{data.description}</div>,
          },
          {
            id: "edit",
            Header: "",
            width: 50,
            accessor: (data) => {
              return (
                <div className="button" onClick={handleEdit}>
                  <img alt="edit" className="icon" src={require('../../images/baseline-edit-24px.svg')} id={data.id} />
                </div>
              )
            },
          },
          {
            id: "delete",
            Header: "",
            width: 50,
            accessor: (data) => {
              return (
                <div className="button" onClick={handleDelete}>
                  <img alt="delete" className="icon" src={require('../../images/baseline-cancel-24px.svg')} id={data.id} />
                </div>
              )
            },
          },
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </Fragment>
  );
};

TaskList = memo(TaskList);
TaskList = connect(globalState => ({
  tasks: getTasks(globalState),
  loading: globalState.loading,
  loaded: globalState.loaded,
  error: globalState.error,
}))(TaskList);
export default TaskList;
