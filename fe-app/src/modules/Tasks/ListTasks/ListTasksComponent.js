import React from 'react';
import { PropTypes as T } from 'prop-types';
import AddTasks from '../AddTasks/AddTasksContainer';

const propTypes = {
  tasks: T.arrayOf(T.object),
  onDelete: T.func,
};

const ListTasksComponent = (props) => {
  const { tasks, onDelete } = props;

  return (
    <div className="list-tasks margin">
      <h2 className="align-middle">Todo List App</h2>
      <div className="child-borders">
        <div className="padding-small">
          <table className="table-hover">
            <tbody>
              <tr>
                <AddTasks />
              </tr>
              {
                tasks.map(task => (
                  <tr key={task.id}>
                    <td>{task.title}</td>
                    <td>
                      <button
                        className="btn-delete btn-small"
                        onClick={() => onDelete(task.id)}
                      >
                        <i aria-hidden="true" className="fa fa-trash" />
                      </button>
                    </td>
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
