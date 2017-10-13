import React from 'react';

require('./style.less');

function NoPendingTask() {
  return (
    <div className="no-pending-task">
      <p>You have no pending tasks</p>
    </div>
  );
}

export default NoPendingTask;
