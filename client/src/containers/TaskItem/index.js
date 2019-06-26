import { memo } from 'react';
import { connect } from 'react-redux';
import TaskItem from '../../components/TaskItem';
import { createSelectTaskItem } from './selectors';
import { initActionCreators } from '../../modules/tasks';
const {
  updateItem,
  directUpdate,
  requestDeleteItem,
  cancelDeleteItem,
  confirmDeleteItem,
  editItem,
  createItemFieldChange,
  cancelUpdate,
} = initActionCreators(['tasksList', 'list']);

const mapStateToProps = () => {
  const selectTaskItem = createSelectTaskItem();
  return (state, ownProps) => {
    let cur = selectTaskItem(ownProps);
    return cur;
  };
};
const mapDispatchToProps = {
  editItem,
  editTitle: createItemFieldChange('title'),
  editDescription: createItemFieldChange('description'),
  editDone: createItemFieldChange('done'),
  commitItem: updateItem,
  cancel: cancelUpdate,
  requestDeleteItem,
  cancelDeleteItem,
  confirmDeleteItem,
  directUpdate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(TaskItem));
