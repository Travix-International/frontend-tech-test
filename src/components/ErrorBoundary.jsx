import * as React from 'react';
import ErrorPage from './ErrorPage';

export default class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.warn("OOPS!!! Error Occured...." + error + " info - " + info);
  }

  render() {
    const { error } = this.state;
    if (error == true) {
      return (
        <ErrorPage />
      )
    }
    return this.props.children;

  }
}