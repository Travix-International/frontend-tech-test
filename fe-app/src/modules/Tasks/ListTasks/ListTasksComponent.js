import React from 'react';
import { PropTypes as T } from 'prop-types';
import AddTasks from '../AddTasks/AddTasksContainer';

const propTypes = {
  tasks: T.arrayOf(T.object),
};

const ListTasksComponent = (props) => {
  const { tasks } = props;

  return (
    <div className="margin">
      <h2 className="align-middle">Todo List App</h2>
      <AddTasks />
      <div className="child-borders">
        <div className="padding-small">
          <table className="table-hover">
            <tbody>
              {
                tasks.map(task => (
                  <tr key={task.id}>
                    <td>{task.title}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

ListTasksComponent.propTypes = propTypes;
export default ListTasksComponent;
