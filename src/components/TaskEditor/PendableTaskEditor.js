import React from 'react';
import { PendingApiContext } from '../../containers/PendingApiContainer';
import TaskEditor from './TaskEditor';

const PendableTaskEditor = props => (
  <PendingApiContext.Consumer>
    {
      ({ savePending, deletePending }) => {
        // Overrides default props values
        const newProps = {
          ...props,
          savingTask: savePending,
          deletingTask: deletePending
        };

        return (
          <TaskEditor { ...newProps }/>
        )
      }
    }  
  </PendingApiContext.Consumer>
);

PendableTaskEditor.propTypes = TaskEditor.propTypes;
PendableTaskEditor.defaultProps = TaskEditor.defaultProps;

export default PendableTaskEditor;


