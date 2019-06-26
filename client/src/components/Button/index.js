import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

export default ({ loading, ...props }) => (
  <Button {...props}>
    <Typography>{props.value} </Typography>
    {loading ? (
      <CircularProgress
        size={14}
        style={{ marginLeft: '5px' }}
      />
    ) : (
      ''
    )}
  </Button>
);
