import { connect } from 'react-redux';
import List from '.';
import { bindActionCreators } from 'redux';
import actions from './../../actions';
import createActions from './../../actions/create';

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
    createError: state.create.createError
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators ({
    fetchAllData: actions.fetchAppData,
    changeTab: actions.fetchTabDataIfNeeded,
    createNewTask: createActions.createTask
  }, dispatch)
)

const ConnectedList = connect (
  mapStateToProps,
  mapDispatchToProps
) (List);

export default ConnectedList;
