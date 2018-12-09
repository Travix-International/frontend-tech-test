import React from 'react';
import { Tabs, Tab, Modal } from 'travix-ui-kit';
import LABELS from '../../constants/labels';
import types from '../../constants/types';
import ConnectedTaskList from '../task-list/ConnectedTaskList';
import TaskInput from '../task-input';

class List extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      activeTabIndex: 0,
      isOpenBaseModal: false
    }
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
    if (data.createError) {
      this.setState ({
        isOpenBaseModal: true
      });
    }
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
    const { currentTab,
            allCount,
            doneCount,
            pendingCount,
            createNewTask,
            createError,
            updating,
            cancelEdit,
            updateTask } = this.props;
    return (
      <React.Fragment>
        <Modal
          active={ this.state.isOpenBaseModal }
          onClose={ () => this.setState({ isOpenBaseModal: false }) }>
            { `${LABELS.ERROR_MESSAGE.CREATE_FAILED}\n${createError}` }
        </Modal>
        <TaskInput
          updateTask={ (id, task) => { updateTask (id, task)} }
          cancelEdit={ () => cancelEdit ()}
          updating={ updating }
          createTask={ (task) => { createNewTask (task)} }
          />
        <div className={`task-list-container ${!currentTab ? 'all-tasks' : ''}`}>
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
      </React.Fragment>
    )
  }
}

List.propTypes = {
  fetchAllData: types._function,
  currentTab: types._number,
  allCount: types._number,
  doneCount: types._number,
  pendingCount: types._number,
  createNewTask: types._function,
  createError: types._string,
  updating: types._object
}

export default List;
