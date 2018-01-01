import { connect } from 'react-redux';
import TodoList from './component';

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps, null)(TodoList);
