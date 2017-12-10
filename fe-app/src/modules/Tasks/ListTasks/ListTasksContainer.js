import React from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './ListTasksActions';

import ListTasksComponent from './ListTasksComponent';

const propTypes = {
  actions: T.object.isRequired,
  tasks: T.arrayOf(T.object),
};
const defaultProps = { tasks: [] };
const mapStateToProps = state => ({
  tasks: state.ListTasksReducer.tasks,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export class ListTasksContainer extends React.Component {
  componentDidMount() {
    this.props.actions.listTasks();
  }

  render() {
    return (
      <ListTasksComponent
        tasks={this.props.tasks}
      />
    );
  }
}

ListTasksContainer.propTypes = propTypes;
ListTasksContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(ListTasksContainer);
