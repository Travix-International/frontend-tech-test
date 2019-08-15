import axios, { AxiosResponse } from "axios";
import { Dispatch, ActionCreator } from "redux";

import { Task } from "../../models/Task";

export const FETCH_TASKS = "FETCH_TASKS";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const CHOOSE_TASK = "CHOOSE_TASK";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";

export interface IFetchTasks {
  type: typeof FETCH_TASKS;
  payload: Task[];
}

export const FetchTasks: ActionCreator<any> = () => {
  return async (dispatch: Dispatch) => {
    return axios
      .get<Task[]>("/tasks")
      .then((response: AxiosResponse) =>
        dispatch(FetchTasksSuccess(response.data.tasks))
      );
  };
};

export const DeleteTask: ActionCreator<any> = (id: number) => {
  return async (dispatch: Dispatch) => {
    return axios
      .delete<Task[]>(`/task/delete/${id}`)
      .then(
        (response: AxiosResponse) =>
          response.status === 200 && dispatch(DeleteTaskSuccess(id))
      );
  };
};

export const CreateTask: ActionCreator<any> = (task: Task) => {
  return async (dispatch: Dispatch) => {
    return axios
      .post<Task[]>(
        `/task/create/${task.title}/${task.description}/${task.category}`
      )
      .then(
        (response: AxiosResponse) =>
          response.status === 201 && dispatch(CreateTaskSuccess(task))
      );
  };
};

// export const UpdateTask: ActionCreator<any> = (task: Task) => {
//   return async (dispatch: Dispatch) => {
//     return axios
//       .put<Task[]>(`/task/update/${task.id}/${task.title}/${task.description}`)
//       .then((response: AxiosResponse) => dispatch(UpdateTaskSuccess(task)));
//   };
// };

export const ChooseTask: ActionCreator<any> = (task: Task) => {
  return async (dispatch: Dispatch) => {
    return axios
      .get<Task[]>(`/task/${task.id}`)
      .then(
        (response: AxiosResponse) =>
          response.status === 200 && dispatch(ChooseTaskSuccess(task))
      );
  };
};

export const FetchTasksSuccess: ActionCreator<any> = (tasks: Task[]) => {
  return {
    type: FETCH_TASKS,
    payload: tasks
  };
};

export const CreateTaskSuccess: ActionCreator<any> = (task: Task) => {
  return {
    type: ADD_TASK,
    payload: task
  };
};

export const DeleteTaskSuccess: ActionCreator<any> = (id: number) => {
  return {
    type: DELETE_TASK,
    payload: id
  };
};

export const UpdateTask: ActionCreator<any> = (task: Task) => {
  return {
    type: UPDATE_TASK,
    payload: task
  };
};

export const ChangeStatus: ActionCreator<any> = (id: number) => {
  return {
    type: CHANGE_STATUS,
    payload: id
  };
};

export const ChooseTaskSuccess: ActionCreator<any> = (task: Task) => {
  return {
    type: CHOOSE_TASK,
    payload: task
  };
};

export const FilterByCategory: ActionCreator<any> = (category: string) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category
  };
};
