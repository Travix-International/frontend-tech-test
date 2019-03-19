import React from 'react';
import { Region, observe } from 'frint-react';

import '../../styles/main.less';

class Root extends React.Component {
  render() {
    return (
      <div id="page-background">

        <Region
          name="header"
          data={{
            hi: 'data from "header" region here',
          }}
        />

        <div className="content">
          <div className="editor">

            <Region
              name="main"
              data={{
                hi: 'available from props of "main" region',
              }}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default observe()(Root);
