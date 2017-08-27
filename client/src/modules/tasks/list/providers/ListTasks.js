import { connect } from 'react-redux';
import { fetchTasks, selectors } from '../../redux/';

const { getShowTasksProps } = selectors;

function mapStateToProps(state) {
  return getShowTasksProps(state);
}

const mapDispatchToProps = {
  fetchTasks,
};

export default connect(mapStateToProps, mapDispatchToProps);
