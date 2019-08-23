import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch, AnyAction } from "redux";

import Header from "../../components/Header/Header";
import TaskItem from "../../components/TaskItem/TaskItem";
import {
  CreateTask,
  ChangeStatus,
  DeleteTask,
  ChooseTask
} from "../../store/actions/actions";
import { Task } from "../../models/Task";

import "./TaskList.scss";

export interface IState {
  tasks: any;
  actions: any;
}

const TaskList: React.FC<IState> = ({ tasks, actions }) => {
  const [step, setStep] = useState(0);

  const handleStatus = (id: number) => {
    actions.ChangeStatus(id);
  };

  const handleDelete = (id: number) => {
    actions.DeleteTask(id);
  };

  const handleTask = (task: Task) => {
    actions.ChooseTask(task);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const task =
    Array.isArray(tasks) &&
    tasks
      .slice(step * 10, (step + 1) * 10)
      .map((task: Task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          completed={task.completed}
          category={task.category}
          changeStatus={() => handleStatus(task.id)}
          deleteTask={() => handleDelete(task.id)}
          handleTask={() => handleTask(task)}
        />
      ));

  return (
    <div className="task-list">
      <Header />
      <div className="list">{task}</div>
      <div className="pagination">
        {step > 0 && <button onClick={prevStep}>prev</button>}
        {step + 1 < Math.ceil(tasks.length / 10) && (
          <button onClick={nextStep}>next</button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    tasks: state.tasks.tasks
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    actions: bindActionCreators(
      { CreateTask, ChangeStatus, DeleteTask, ChooseTask },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
