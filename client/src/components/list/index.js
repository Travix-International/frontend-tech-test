import React from 'react';
import { Tabs, Tab, LoadingOverlay } from 'travix-ui-kit';
import LABELS from '../../constants/labels';

class List extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      activeTabIndex: 0
    }
  }
  render () {
    return (
      <div className='task-list-container'>
        <Tabs onChange={(value) => {this.setState({ activeTabIndex: value });}}>
          <Tab title={ `${LABELS.TABS.A} [${100}]` } />
          <Tab title={ `${LABELS.TABS.P} [${90}]` } />
          <Tab title={ `${LABELS.TABS.D} [${10}]` } />
        </Tabs>
        <div className='tab-content-container'>
          <LoadingOverlay
            loading={true}
            message={ LABELS.TASKS.LOADING }
            messageDirection='bottom'
            spinner={true}
            transparency={false}>
              <span> tab content </span>
          </LoadingOverlay>
        </div>
      </div>
    )
  }
}

export default List;
