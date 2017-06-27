import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Loader from './Loader';
import EmptyList from './EmptyList';

const List = ({ items, error, loaded, loading, onFormSubmit, onDeleteClick }) => (
  <div className="task-list">
    { error && <p style={{color: 'red'}}>{error}</p> }

    { loading && <Loader/> }

    { loaded && items.length < 1 && <EmptyList/> }

    { loaded && items.length > 0 && items.map((item, index) =>
      <Item {...item} key={index}
            onDeleteClick={() => onDeleteClick(item.id)}
            onFormSubmit={onFormSubmit} />
    ) }
  </div>
);

List.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  error: PropTypes.string,
  items: PropTypes.array,
  onFormSubmit: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

List.defaultProps = {
  loading: false,
  loaded: false,
  items: []
};

export default List;
