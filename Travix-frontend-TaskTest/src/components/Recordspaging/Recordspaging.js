import React from 'react';
import PropTypes from 'prop-types';
import { TASKS_PER_PAGE } from '../../Globalconstants';
import {
  DropDown
} from 'travix-ui-kit';

import './Recordspaging.scss';

const Recordspaging = ({ currentPage, totalRecords, onPageClick }) => {
  const noofPages = Math.ceil(totalRecords / TASKS_PER_PAGE);
  const linkofPages = [];
  for (let counter = -1; counter < 5; counter += 1) {
    if (currentPage + counter <= noofPages && currentPage + counter > 0)
    linkofPages.push(
        <a
          href="#"
          key={`page_${counter}`}
          onClick={() => onPageClick(currentPage + counter)}
        >
          {currentPage + counter}
        </a>
      );
  }

  return (
    <div className="wrap">
      <a href="#" onClick={() => onPageClick(1)}>
        &lt;&lt;
      </a>
      {currentPage - 1 > 0 && (
        <a href="#" onClick={() => onPageClick(currentPage - 1)}>
          &lt;
        </a>
      )}
      {linkofPages}
      {currentPage + 1 <= noofPages && (
        <a href="#" onClick={() => onPageClick(currentPage + 1)}>
          &gt;
        </a>
      )}
      <a href="#" onClick={() => onPageClick(noofPages)}>
        &gt;&gt;
      </a>
    </div>
  );
};

Recordspaging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
  totalRecords: PropTypes.number.isRequired,
};

export default Recordspaging;
