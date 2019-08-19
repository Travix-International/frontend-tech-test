import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import TaskItem from '../taskItem/TaskItem';
import InfiniteScroll from 'react-infinite-scroller';
import { retrieveTasksList } from '../actions';
import './tasksList.scss';

const TasksList = (props) => {
  const { hasMoreTasks, tasksList, deletedTasks } = useSelector(state => (
      {
        hasMoreTasks: state.task.hasMoreTasks,
        tasksList: state.task.tasksList,
        deletedTasks: state.task.deletedTasks
      }
    ), shallowEqual);
  const dispatch = useDispatch();

  const loadMoreItems = (page) => {
    dispatch(retrieveTasksList(page - 1, deletedTasks));
  }

  const taskItems = tasksList.map((task) => (
    <TaskItem key={(task.id || task.tempId) + task.title}
                  id={task.id}
                  tempId={task.tempId}
                  title={task.title}
                  description={task.description}
                  isEditable={task.isEditable}
    />
  ));

  return (
    <>
      <div style={{overflow:'auto'}} className="taskList">
        <InfiniteScroll className="taskList__infiniteScroll"
                        pageStart={0}
                        loadMore={loadMoreItems}
                        hasMore={hasMoreTasks}
                        loader={<div className="loader" key={0}>Loading ...</div>}
        >
            {taskItems}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default TasksList;