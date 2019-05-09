import React from 'react';
import { connect } from 'react-redux';
import { 
  isSavingTask, 
  isDeletingTask 
} from '../selectors/apiSelectors';

/**
 * A context provider to notify add and delete pending
 */
export const PendingApiContext = React.createContext({
  savePending: false,
  deletePending: false
});

const PendingApiContainer = props => {

  const { 
    savePending, 
    deletePending,
    children
  } = props;

  return (
    <PendingApiContext.Provider 
      value={{
        deletePending,
        savePending
      }}
    >
      { children }
    </PendingApiContext.Provider>
  );
};

const mapStateToProps = state => ({
  savePending: isSavingTask(state),
  deletePending: isDeletingTask(state)
});

export default connect(mapStateToProps)(PendingApiContainer);
