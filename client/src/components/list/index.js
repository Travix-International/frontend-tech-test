import React from 'react';
import { Tabs, Tab } from 'travix-ui-kit';
import LABELS from '../../constants/labels';
import types from '../../constants/types';
import ConnectedTaskList from '../task-list/ConnectedTaskList';

class List extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      activeTabIndex: 0
    }
    
    // maintains the current page for 3 tabs.
    this.currentPage = [1, 1, 1];
  }

  componentDidMount () {
    this.props.fetchAllData ();
    this._updateState (this.props);
  }

  componentWillReceiveProps (nextProps) {
    this._updateState (nextProps);
  }

  /**
   * @description function to update the state object.
   * @param {Object} data nextProps || this.props
   */
  _updateState (data) {
    this.setState ({
      activeTabIndex: data.currentTab
    });
  }

  /**
   * @description function to update the current tab
   * and retrieve tab data.
   * @param {Number} value of the clicked tab
   */
  _onTabChange (value) {
    this.setState ({
      activeTabIndex: value
    });
    this.props.changeTab (parseInt (value));
  }

  render () {
    const { allCount,
            doneCount,
            pendingCount } = this.props;
    return (
      <div className='task-list-container'>
        <Tabs
          onChange={ this._onTabChange.bind (this) }>
          <Tab title={ `${LABELS.TABS.A} [${allCount}]` } />
          <Tab title={ `${LABELS.TABS.P} [${pendingCount}]` } />
          <Tab title={ `${LABELS.TABS.D} [${doneCount}]` } />
        </Tabs>
        <div className='tab-content-container'>
          <ConnectedTaskList />
        </div>
      </div>
    )
  }
}

List.propTypes = {
  fetchAllData: types._function,
  currentTab: types._number,
  allCount: types._number,
  doneCount: types._number,
  pendingCount: types._number
}

export default List;
