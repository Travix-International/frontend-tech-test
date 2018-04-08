import React from 'react';
import PropTypes from 'prop-types';
import { TASKS_PER_PAGE } from '../../constants';

import './Paging.scss';

const Paging = ({ currentPage, totalRecords, onPageClicked }) => {
  const totalPage = Math.ceil(totalRecords / TASKS_PER_PAGE);
  const pageLinks = [];
  for (let i = -1; i < 5; i += 1) {
    if (currentPage + i <= totalPage && currentPage + i > 0)
      pageLinks.push(
        <a href="#" onClick={() => onPageClicked(currentPage + i)}>
          {currentPage + i}
        </a>
      );
  }

  return (
    <div className="Paging__wrapper">
      <a href="#" onClick={() => onPageClicked(1)}>
        &lt;&lt;
      </a>
      {currentPage - 1 > 0 && (
        <a href="#" onClick={() => onPageClicked(currentPage - 1)}>
          &lt;
        </a>
      )}
      {pageLinks}
      {currentPage + 1 <= totalPage && (
        <a href="#" onClick={() => onPageClicked(currentPage + 1)}>
          &gt;
        </a>
      )}
      <a href="#" onClick={() => onPageClicked(totalPage)}>
        &gt;&gt;
      </a>
    </div>
  );
};

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageClicked: PropTypes.func.isRequired,
  totalRecords: PropTypes.number.isRequired,
};

export default Paging;
