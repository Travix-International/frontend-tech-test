import initList from '../List';
import Item from '../TaskItem';
import Paging from '../Paging';
import {
  initSelectItemsPage,
  initActionCreators,
} from '../../modules/tasks';

export default initList({
  Item,
  Paging,
  dataActions: initActionCreators(['tasksList']),
  initSelectItemsPage,
  selectListState: state => state.tasksList,
});
