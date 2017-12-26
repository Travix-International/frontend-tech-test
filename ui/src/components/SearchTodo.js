import React from 'react';
import PropTypes from 'prop-types';

import './SearchTodo.css';

const SearchTodo = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-todo">
      <input
        className="input"
        onChange={e => handleChange(e)}
        placeholder="Search..."
        type="text"
      />
    </div>
  );
};

SearchTodo.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchTodo;
