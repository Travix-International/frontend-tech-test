import React from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './ListTasksActions';
import * as deleteActions from '../DeleteTasks/DeleteTasksActions';
import ListTasksComponent from './ListTasksComponent';

const propTypes = {
  actions: T.object.isRequired,
  deleteActions: T.object.isRequired,
  totalPages: T.number.isRequired,
  tasks: T.arrayOf(T.object),
};
const defaultProps = { tasks: [] };
const mapStateToProps = state => ({
  tasks: state.ListTasksReducer.tasks,
  totalPages: state.ListTasksReducer.totalPages,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  deleteActions: bindActionCreators(deleteActions, dispatch),
});

export class ListTasksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onDeleteTask = this.onDeleteTask.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    this.props.actions.listTasks();
  }

  onDeleteTask(id) {
    this.props.deleteActions.deleteTask(id);
  }

  onEdit(id) {
    this.props.actions.showEditMode(this.props.tasks, id);
  }

  onPageChange({ selected }) {
    this.props.actions.listTasks(selected + 1);
  }

  render() {
    return (
      <ListTasksComponent
        onDelete={this.onDeleteTask}
        onEdit={this.onEdit}
        onPageChange={this.onPageChange}
        tasks={this.props.tasks}
        totalPages={this.props.totalPages}
      />
    );
  }
}

ListTasksContainer.propTypes = propTypes;
ListTasksContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(ListTasksContainer);
