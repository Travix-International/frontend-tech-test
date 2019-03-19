import React from 'react';
import { observe, streamProps } from 'frint-react';

import { Add } from './Icons';

class Root extends React.PureComponent {
  render() {
    return (
      <div className="top-bar">

        <div className="top-bar-inner">
          <div className="top-bar-left">
            <h1>todo</h1>
          </div>
          <div className="top-bar-right">
            <span
              className="icons"
              onClick={() => this.props.openModal(false)}
            >
              <Add />
              <span>add task</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default observe((app) => {
  return streamProps()
    //Self
    .set(
      app.get('store').getState$()
    )
    .set({
      logger: app.get('logger')
    })
    // other app: TodosApp
    .set(
      app.getAppOnceAvailable$('ModalApp'),
      modalApp => modalApp.get('store').getState$(),
      modalAppStore => ({ modal: modalAppStore.modal.value })
    )
    .set(
      app.getAppOnceAvailable$('ModalApp'),
      modalApp => modalApp.get('store'),
      modalAppStore => ({
        openModal: showEditMode => modalAppStore.dispatch({
          type: 'OPEN_MODAL',
          showEditMode
        })
      })
    )
    .get$();
})(Root);
