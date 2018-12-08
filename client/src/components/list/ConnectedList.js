import { connect } from 'react-redux';
import List from '.';
import { bindActionCreators } from 'redux';
import actions from './../../actions';

const mapStateToProps = (state) => {
  const { currentTab,
          allCount,
          doneCount,
          pendingCount } = state.appData;
  return {
    currentTab,
    allCount,
    doneCount,
    pendingCount
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators ({
    fetchAllData: actions.fetchAppData,
    changeTab: actions.fetchTabDataIfNeeded
  }, dispatch)
)

const ConnectedList = connect (
  mapStateToProps,
  mapDispatchToProps
) (List);

export default ConnectedList;
