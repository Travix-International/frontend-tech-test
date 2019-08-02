import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  task: state.task
});

export default connect(mapStateToProps)(Header);
