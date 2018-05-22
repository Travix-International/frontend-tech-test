import React, { Component } from 'react';
import { compose, withState } from 'recompose';

const fetchData = model => BaseComponent =>
  class FetchData extends Component {
    componentWillMount() {
      /* eslint-disable */
      this.props.setData(model(this.props));
      /* eslint-enable */
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  };

export default (model, initial) =>
  compose(
    withState('data', 'setData', initial),
    fetchData(model),
  );
