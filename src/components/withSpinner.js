import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, 
  Spinner 
} from 'reactstrap';

// Displays a spinner during data loading
const withSpinner = WrappedComponent => {

  return class extends React.PureComponent {

    static propTypes = {
      isPending: PropTypes.bool,
      color: PropTypes.string,
      onLoad: PropTypes.func
    }
    
    static defaultProps = {
      isPending: false,
      color: 'primary',
      onLoad: () => {}
    }

    componentDidMount () {
      this.props.onLoad();
    }

    renderSpinner = () => {
      const { color } = this.props;
      return (
        <Container style={{
          display: 'flex',
          height: '52px',
          width: '100%',
          alignItems: 'center'
        }}>
          <Spinner 
            style={{ margin: '0 auto' }}
            color={color} 
          />
        </Container>
      );
    }

    render () {
      const { isPending, color, onLoad, ...rest } = this.props;
      return isPending
        ? this.renderSpinner()
        : <WrappedComponent { ...rest } />
    }
  }
};

export default withSpinner;