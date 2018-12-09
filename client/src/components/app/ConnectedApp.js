import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';
import App from '.';

const mapStateToProps = (state) => {
  return {
    userid: state.appData.userid,
    registerError: state.appData.registerError
  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators ({
    registerUser: actions.registerUser
  }, dispatch)
);

const ConnectedApp = connect (
  mapStateToProps,
  mapDispatchToProps
) (App);

export default ConnectedApp;