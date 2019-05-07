import { connect } from 'react-redux';
import { getFilter } from '../selectors/taskSelectors';
import { setTaskVisibility } from '../actions/filterActions';
import { Header } from '../components/Header';

const mapStateToProps = state => ({
  currentFilter: getFilter(state)
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setTaskVisibility(filter)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);