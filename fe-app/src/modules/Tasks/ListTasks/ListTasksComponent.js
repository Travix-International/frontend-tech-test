import React from 'react';
import { PropTypes as T } from 'prop-types';
import ActionButton from '../../../components/ActionButton/ActionButton';
import AddTasks from '../AddTasks/AddTasksContainer';
import EditTasks from '../EditTasks/EditTasksContainer';

const propTypes = {
  tasks: T.arrayOf(T.object),
  onDelete: T.func,
  onEdit: T.func,
};

const ListTasksComponent = (props) => {
  const { tasks, onDelete, onEdit } = props;

  return (
    <div className="list-tasks margin">
      <h2 className="align-middle">Todo List App</h2>
      <div className="child-borders">
        <div className="padding-small">
          <table className="table-hover">
            <thead>
              <tr>
                <th colSpan="4"><AddTasks /></th>
              </tr>
            </thead>
            <tbody>
              {
                tasks.map(task => ([
                  <tr key={task.id}>
                    <td className="action-column">
                      <i
                        className="fa fa-arrow-down"
                      />
                    </td>
                    <td>{task.title}</td>
                    <td>
                      <ActionButton
                        btnCss="btn-action btn-small"
                        iconCSS="fa fa-trash"
                        onClick={() => onDelete(task.id)}
                      />
                      <ActionButton
                        btnCss="btn-action btn-small"
                        iconCSS="fa fa-pencil-square-o"
                        onClick={() => onEdit(task.id)}
                      />
                    </td>
                  </tr>,
                  <tr>
                    <th colSpan="4">
                      { task.isEditing && <EditTasks taskId={task.id} /> }
                    </th>
                  </tr>
                ]))
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
