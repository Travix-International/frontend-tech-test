import React from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import './paging.scss';

export default ({
  current,
  options,
  changePage,
  showPaging,
}) =>
  showPaging ? (
    <InputLabel className="paging">
      Page:
      <Select
        value={current}
        onChange={e => changePage(e.target.value)}
        inputProps={{
          name: 'page',
          id: 'page',
        }}
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </InputLabel>
  ) : (
    ''
  );
