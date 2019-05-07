import { connect } from 'react-redux';
import { VisibilityFilter } from '../components/VisibilityFilter';
import { getFilter } from '../selectors/taskSelectors';
import { setTaskVisibility } from '../actions/filterActions';

const mapStateToProps = state => ({
  currentFilter: getFilter(state)
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setTaskVisibility(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);