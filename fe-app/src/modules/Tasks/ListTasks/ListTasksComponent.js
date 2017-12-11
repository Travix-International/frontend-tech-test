import React from 'react';
import { PropTypes as T } from 'prop-types';
import ReactPaginate from 'react-paginate';
import ActionButton from '../../../components/ActionButton/ActionButton';
import AddTasks from '../AddTasks/AddTasksContainer';
import EditTasks from '../EditTasks/EditTasksContainer';

const propTypes = {
  totalPages: T.number,
  tasks: T.arrayOf(T.object),
  onDelete: T.func,
  onEdit: T.func,
  onPageChange: T.func,
};

const ListTasksComponent = (props) => {
  const { totalPages, tasks, onDelete, onEdit, onPageChange } = props;

  return (
    <div className="list-tasks margin">
      <h2 className="align-middle">Todo List App</h2>
      <div className="child-borders">
        <div className="padding-small">
          <table className="table-hover">
            <thead>
              <tr>
                <th colSpan="3"><AddTasks /></th>
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
                    <th colSpan="3">
                      { task.isEditing && <EditTasks taskId={task.id} /> }
                    </th>
                  </tr>
                ]))
              }
            </tbody>
          </table>
          <ReactPaginate
            activeClassName={'active'}
            breakClassName={'break-me'}
            breakLabel={<a href="">...</a>}
            containerClassName={'pagination'}
            marginPagesDisplayed={2}
            nextLabel={'next'}
            onPageChange={onPageChange}
            pageCount={totalPages}
            pageRangeDisplayed={5}
            previousLabel={'previous'}
            subContainerClassName={'pages pagination'}
          />
        </div>
      </div>
    </div>
  );
};

ListTasksComponent.propTypes = propTypes;
export default ListTasksComponent;
