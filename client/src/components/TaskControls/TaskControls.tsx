import React, { useState } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import AddTask from "../AddTask/AddTask";
import { CreateTask, UpdateTask } from "../../store/actions/actions";
import { Task } from "../../models/Task";
import Description from "../Description/Description";

import "./TaskControls.scss";

interface ITaskControls {
  selectedTask: Task;
  actions: any;
}

const TaskControls: React.FC<ITaskControls> = ({ selectedTask, actions }) => {
  const [task, setTask] = useState<Task>(selectedTask);

  const [newTask, setNewTask] = useState<Task>({
    id: 21,
    title: "",
    description: "",
    category: ""
  });

  const [edit, setEdit] = useState(false);

  const addTask = () => {
    actions.CreateTask(newTask);
    let id = newTask.id + 1;
    setNewTask({ ...newTask, id });
  };

  const editTask = () => {
    actions.UpdateTask(task);
    setEdit(!edit);
  };

  const handleEdit = () => {
    setTask(selectedTask);
    setEdit(!edit);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleNewChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  return (
    <div className="task-controls">
      <AddTask change={handleNewChange} add={addTask} task={newTask} />
      <Description
        task={!edit ? selectedTask : task}
        handleEdit={handleEdit}
        status={edit}
        change={handleChange}
        edit={editTask}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    selectedTask: state.tasks.selectedTask
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({ CreateTask, UpdateTask }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskControls);
