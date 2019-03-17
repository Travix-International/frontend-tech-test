import React from 'react';
import { Region, observe } from 'frint-react';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import '../../styles/main.less';

class Root extends React.Component {
  render() {
    return (
      <div id="page-background">

        <Region
          name="header"
          data={{
            hi: `data from 'header' region here`,
            showSidebar: this.props.showSidebar
          }}
        />

        <div className="content">
          <div className="editor">

            <Region
              name="main"
              data={{
                hi: `available from props of 'main' region`,
                showSidebar: this.props.showSidebar
              }}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default observe(function (app) {
  const sidebarToggle$ = (new BehaviorSubject(true))
    .map((toggleValue) => {
      return {
        showSidebar: toggleValue,
      };
    });

  const actions$ = Observable.of({
    toggle: (value) => {
      sidebarToggle$.next(value);
    }
  });

  const services$ = Observable.of({
    logger: app.get('logger'),
  });

  return sidebarToggle$
    .merge(actions$)
    .merge(services$)
    .scan((props, emitted) => {
      return {
        ...props,
        ...emitted,
      };
    }, {
        // start with these props
        appName: app.getName(),
      });
})(Root);
