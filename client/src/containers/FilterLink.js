import { connect } from 'react-redux';
import { setFilter } from '../actions';
import PropTypes from 'prop-types';
import React from 'react';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setFilter(ownProps.filter))
});

export const Filter = ({ active, children, onClick }) => {
  if (active) return null;
  return (
    <span onClick={onClick} disabled={active}>
      {children}
    </span>
  );
};
Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
