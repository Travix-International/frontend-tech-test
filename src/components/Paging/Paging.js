import React from 'react';
import PropTypes from 'prop-types';

import './Paging.scss';

const Paging = ({ currentPage, totalPage, onPageClicked }) => (
  <div className="Paging__wrapper">
    <a href="#" onClick={() => onPageClicked(1)}>&lt;&lt;</a>
    <a href="#" onClick={() => onPageClicked(currentPage - 1)}>&lt;</a>
    <a href="#" onClick={() => onPageClicked(currentPage)}>
      <strong>{currentPage}</strong>
    </a>
    <a href="#" onClick={() => onPageClicked(currentPage + 1)}>{currentPage + 1}</a>
    <a href="#" onClick={() => onPageClicked(currentPage + 2)}>{currentPage + 2}</a>
    <a href="#" onClick={() => onPageClicked(currentPage + 3)}>{currentPage + 3}</a>
    <a href="#" onClick={() => onPageClicked(currentPage + 4)}>{currentPage + 4}</a>
    <a href="#" onClick={() => onPageClicked(currentPage + 1)}>&gt;</a>
    <a href="#" onClick={() => onPageClicked(totalPage)}>&gt;&gt;</a>
  </div>
);

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageClicked: PropTypes.func.isRequired,
  totalPage: PropTypes.number.isRequired,
};

export default Paging;
