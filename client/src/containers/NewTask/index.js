import { memo } from 'react';
import { connect } from 'react-redux';
import {
  newItem,
  newCancel,
  initActionCreators,
  createNewItemFieldChange,
  selectNewItemState,
} from '../../modules/tasks';
import NewTask from '../../components/NewTask';
const { saveNewItem } = initActionCreators(['tasksList']);

const mapStateToProps = selectNewItemState;
const mapDispatchToProps = {
  editTitle: createNewItemFieldChange('title'),
  editDescription: createNewItemFieldChange('description'),
  editDone: createNewItemFieldChange('done'),
  commitItem: saveNewItem,
  cancel: newCancel,
  newItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(NewTask));
