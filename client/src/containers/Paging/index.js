import { memo } from 'react';
import { connect } from 'react-redux';
import Paging from '../../components/Paging';
import { initActionCreators } from '../../modules/tasks';
const { changePage } = initActionCreators([
  'tasksList',
  'page',
]);
const createOptions = total => {
  const recur = (total, counter, result) =>
    counter > total || !total
      ? result
      : recur(total, counter + 1, result.concat(counter));
  return recur(total, 1, []);
};
const mapStateToProps = (state, { current, total }) => {
  const options = createOptions(total);
  return {
    current,
    options,
    showPaging: options.length > 1,
  };
};
const mapDispatchToProps = {
  changePage,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Paging));
