/**
 * @fileoverview Connector: connects list component with the store.
 */
import { connect } from 'react-redux';
import List from '.';
import { bindActionCreators } from 'redux';
import actions from './../../actions';
import createActions from './../../actions/create';
import updateActions from '../../actions/update';

const mapStateToProps = (state) => {
  const { currentTab,
          allCount,
          doneCount,
          pendingCount } = state.appData;
  return {
    currentTab,
    allCount,
    doneCount,
    pendingCount,
    updating: state.update.updating,
    createError: state.create.createError
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators ({
    fetchAllData: actions.fetchAppData,
    changeTab: actions.fetchTabDataIfNeeded,
    createNewTask: createActions.createTask,
    cancelEdit: updateActions.cancelEdit,
    updateTask: updateActions.updateTask
  }, dispatch)
)

const ConnectedList = connect (
  mapStateToProps,
  mapDispatchToProps
) (List);

export default ConnectedList;
