import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './epicInjectors';

export default ({ key, epic }) => WrappedComponent => {
  class InjectEpic extends Component {
    static WrappedComponent = WrappedComponent;
    static contextTypes = {
      store: PropTypes.object.isRequired,
    };
    static displayName = `withEpic(${(WrappedComponent.displayName || WrappedComponent.name || 'Component')})`;

    componentWillMount() {
      const { injectEpic } = this.injectors;

      injectEpic(key, { epic });
    }

    injectors = getInjectors(this.context.store);

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(InjectEpic, WrappedComponent);
};
