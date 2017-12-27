import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import action from '../../actions';
import Item from './Item';

import './style.scss';

export class HomeComponent extends Component {
  static propTypes = {
    fetchTasks: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    const { tasks } = this.props;

    return (
      <div className="page--home">
        <Helmet>
          <title>Home</title>
          <meta content="home page shows posts" name="description" />
          <meta content="home page" name="og:title" />
        </Helmet>

        {tasks.map((task) => {
          return <Item key={task.id} mode="NORMAL" task={task} />;
        })}

        {/* Add function */}
        <Item mode="EDIT" />

      </div>
    );
  }
}

export function mapStateToProps(state) {
  const taskEntity = _get(state, 'entities.task', {});
  const taskIds = _get(state, 'pages.home.tasks');
  const tasks = taskIds.map((id) => {
    return taskEntity[id] || {};
  });

  return {
    tasks,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchTasks: () => {
      return dispatch(action.fetchTasks());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
