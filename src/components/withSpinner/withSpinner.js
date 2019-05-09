import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, 
  Spinner 
} from 'reactstrap';

// Displays a spinner in the component when isPendding is true
const withSpinner = WrappedComponent => {

  return class extends React.PureComponent {

    static propTypes = {
      isPending: PropTypes.bool,
      spinnerSize: PropTypes.string,
      spinnerColor: PropTypes.string
    }
    
    static defaultProps = {
      isPending: false,
      spinnerColor: 'primary'
    }

    static displayName = `withSpinner(${WrappedComponent.displayName || WrappedComponent.name}`;

    renderSpinner = props => {
      const { spinnerColor, spinnerSize } = props;

      return (
        <Container style={{
          display: 'flex',
          padding: '0 6px',
          alignItems: 'center'
        }}>
          <Spinner 
            style={{ margin: '0 auto' }}
            color={spinnerColor} 
            size={spinnerSize}
          />
        </Container>
      );
    }

    render () {
      const { 
        isPending, 
        spinnerSize, 
        spinnerColor, 
        children, 
        ...rest 
      } = this.props;
      const innerComponent = isPending 
        ? this.renderSpinner({ spinnerColor, spinnerSize }) 
        : children;
      return (
        <WrappedComponent {...rest}>
          { innerComponent }
        </WrappedComponent>
      );
    }
  }
};

export default withSpinner;