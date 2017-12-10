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
  tasks: T.arrayOf(T.object),
};
const defaultProps = { tasks: [] };
const mapStateToProps = state => ({
  tasks: state.ListTasksReducer.tasks,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  deleteActions: bindActionCreators(deleteActions, dispatch),
});

export class ListTasksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onDeleteTask = this.onDeleteTask.bind(this);
  }

  componentDidMount() {
    this.props.actions.listTasks();
  }

  onDeleteTask(id) {
    this.props.deleteActions.deleteTask(id);
  }

  render() {
    return (
      <ListTasksComponent
        onDelete={this.onDeleteTask}
        tasks={this.props.tasks}
      />
    );
  }
}

ListTasksContainer.propTypes = propTypes;
ListTasksContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(ListTasksContainer);
