import React from 'react';
import PropTypes from 'prop-types';
import { AutoSizer, List } from 'react-virtualized';
import { Spinner } from 'travix-ui-kit';


import Task from './Task';

const TasksList = (props) => {
  const { tasks, selectTask } = props;

  const renderTask = ({ index, key, style }) => (
    <div key={key} style={style}>
      <Task selectTask={selectTask} task={tasks[index]} />
    </div>
  );
  return (
    <ul id="todo-list-container">
      { tasks
        ? (
          <AutoSizer>
            {
            ({ width, height }) => (
              <List
                className="list"
                height={height}
                overscanRowCount={3}
                rowCount={tasks.length}
                rowHeight={55}
                rowRenderer={renderTask}
                {...tasks}
                width={width}
              />
            )
          }
          </AutoSizer>
        )
        : (
          <div className="spinner-container">
            <Spinner size="m" />
          </div>
        )
      }
    </ul>
  );
};
TasksList.propTypes = {
  selectTask: PropTypes.func.isRequired,
};

export default TasksList;
