import React from 'react';
import { connect } from 'react-redux';
import { getFilter, getSearchQuery } from '../selectors/taskSelectors';
import { setTaskVisibility } from '../actions/filterActions';
import { Header } from '../components/Header';
import SearchContainer from './SearchContainer';

/**
 * Connects visibility filter with app state
 */

const mapStateToProps = state => ({
  currentFilter: getFilter(state),
  query: getSearchQuery(state)
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setTaskVisibility(filter)),
});

const HeaderContainer = props => (
  <Header { ...props }>
    <SearchContainer />
  </Header>
);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);