import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { clearMessages } from './actions';
import './messages.scss';

const MessageToast = (props) => {
  const [showMessage, setShowMessage] = useState(false);
  const messages = useSelector(state => state.message.statusMessages, shallowEqual);
  const dispatch = useDispatch();

  useEffect(
    () => {
      setShowMessage(true);
      let showMessageTimeout = setTimeout(() => {
        setShowMessage(false);
        dispatch(clearMessages());
      }, 5000)

      return () => {
        clearTimeout(showMessageTimeout)
      }
    },
    [messages]
  );

  const messageText = messages.errorMessage || messages.successMessage;
  const messageStyles = messages.errorMessage && messages.errorMessage.length
    ? "statusMessage statusMessage--error"
    : "statusMessage statusMessage--successful";

  return (
    showMessage && (
      <div className={messageStyles}>
        <h3>{messageText}</h3>
      </div>
    )
  );
}

export default MessageToast;