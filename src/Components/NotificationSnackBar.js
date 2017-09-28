
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import CloseIcon from 'material-ui-icons/Close';

const NotificationSnackBar = ({ onClose, open }) => (
  <Snackbar
    SnackbarContentProps={{
      'aria-describedby': 'message-id',
    }}
    action={[
      <IconButton
        aria-label="Close"
        className="notification-snackbar__close"
        color="inherit"
        key="close"
        onClick={() => onClose()}
      >
        <CloseIcon />
      </IconButton>,
    ]}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    autoHideDuration={6000}
    className="notification-snackbar"
    message={<span id="message-id">Task Deleted</span>}
    onRequestClose={() => onClose()}
    open={open}
  />
);

NotificationSnackBar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};

export {
  NotificationSnackBar as default
};
