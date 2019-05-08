import { connect } from 'react-redux';
import { 
  clearSearch,
  searchTaskAction
} from '../actions/searchActions';
import { SearchBar } from '../components/SearchBar';

const mapDispatchToProps = dispatch => ({
  onSearch: query => dispatch(searchTaskAction(query)),
  onClear: () => dispatch(clearSearch)
});

export default connect(undefined, mapDispatchToProps)(SearchBar);