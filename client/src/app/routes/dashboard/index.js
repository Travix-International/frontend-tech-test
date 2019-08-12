import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecentTaskList from "./components/RecentTaskList";
import WelComeCard from "./components/WelComeCard";
import WidgetCard from "./components/WidgetCard";
import Widget from "components/Widget/index";
import TasksGauge from "./components/TasksGauge"

import { fetchStats } from 'actions/Dashboard'

class Dashboard extends Component {
  todoItems() {

  }

  componentWillMount() {
    this.props.fetchStats();
  }

  render() {

    const { stats, tasksPerStatus } = this.props;

    return (
      <div className="dashboard animated slideInUpTiny animation-duration-3">

        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <Widget styleName="p-4">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <WelComeCard todosCount={stats ? stats.all : 0} />
                </div>

                <div className="jr-audi-col col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  {stats != null ?  <TasksGauge tasksPerStatus={tasksPerStatus}/> : <div/>}
                
                </div>
              </div>
            </Widget>
          </div>


          <div className="col-xl-12 col-lg-12 col-md-12 col-12 order-sm-1">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                <WidgetCard data={{
                  cardColor: 'primary',
                  imageIcon: require('assets/images/dashboard/project-icon.png'),
                  title: stats ? stats.done : 0,
                  subTitle: 'Done'
                }} />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                <WidgetCard data={{
                  cardColor: 'secondary',
                  imageIcon: require('assets/images/dashboard/tasks-icon.png'),
                  title: stats ? stats.starred : 0,
                  subTitle: 'STARRED'
                }} />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                <WidgetCard data={{
                  cardColor: 'info',
                  imageIcon: require('assets/images/dashboard/teams-icon.png'),
                  title: stats ? stats.todo : 0,
                  subTitle: 'TO DO'
                }} />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                <WidgetCard data={{
                  cardColor: 'warning',
                  imageIcon: require('assets/images/dashboard/files-icon.png'),
                  title: stats ? stats.all : 0,
                  subTitle: 'TASKS'
                }} />
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <RecentTaskList todos={stats ? stats.recent : null} />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = ({ dashboard }) => {

  const {
    stats,
    tasksPerStatus
  } = dashboard;

  return {
    stats,
    tasksPerStatus
  }
};

export default connect(mapStateToProps, {
  fetchStats
})(Dashboard);