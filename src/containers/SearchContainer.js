import { connect } from 'react-redux';
import { 
  clearSearch,
  searchTaskAction
} from '../actions/searchActions';
import { SearchBar } from '../components/SearchBar';

/**
 * Maps asynchronous search actions to Searchbar
 */

const mapDispatchToProps = dispatch => ({
  onSearch: query => dispatch(searchTaskAction(query)),
  onClear: () => dispatch(clearSearch)
});

export default connect(undefined, mapDispatchToProps)(SearchBar);