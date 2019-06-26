import initActions from '../data/actions';
import initMiddleware from '../data/middleware';
import initReducer from '../data/reducer';
import initSelectors from '../data/selectors';

const selectors = initSelectors(state => state.tasks);
const actions = initActions('TASKS');
const reducer = initReducer(actions, ['tasks']);
//@todo: get this from config
const API_ROOT = 'http://localhost:9001';
//path to the list(s) containing tasks that may need
//  to change page or refreshed when a task changes
const listPaths = [['tasksList']];

const mw = initMiddleware({
  actions,
  selectors,
  listPaths,
  API_ROOT,
  urlItemPath: '/task',
  urlPagePath: page => `/tasks/?page=${page}`,
});
// cosole.log(
//   Object.keys(a)
//     .map(key => `export const ${key}=a.${key};`)
//     .join('\n')
// );
export const FETCH_DATA = actions.FETCH_PAGE;
export const FETCH_DATA_SUCCESS =
  actions.FETCH_PAGE_SUCCESS;
export const FETCH_DATA_FAILED = actions.FETCH_PAGE_FAILED;
export const EDIT = actions.EDIT;
export const UPDATE = actions.UPDATE;
export const UPDATE_SUCCESS = actions.UPDATE_SUCCESS;
export const DIRECT_UPDATE = actions.DIRECT_UPDATE;
export const DIRECT_UPDATE_SUCCESS =
  actions.DIRECT_UPDATE_SUCCESS;
export const DIRECT_UPDATE_FAILED =
  actions.DIRECT_UPDATE_FAILED;
export const NEW = actions.NEW;
export const NEW_CANCEL = actions.NEW_CANCEL;
export const SAVE_NEW = actions.SAVE_NEW;
export const NEW_SUCCESS = actions.NEW_SUCCESS;
export const CONFIRM_DELETE = actions.CONFIRM_DELETE;
export const DELETE_SUCCESS = actions.DELETE_SUCCESS;
export const REFRESH_PAGE = actions.REFRESH_PAGE;
export const NEW_FIELD_CHANGE = actions.NEW_FIELD_CHANGE;
export const REQUEST_DELETE = actions.REQUEST_DELETE;
export const CANCEL_DELETE = actions.CANCEL_DELETE;
export const FIELD_CHANGE = actions.FIELD_CHANGE;
export const CHANGE_PAGE = actions.CHANGE_PAGE;
export const initActionCreators =
  actions.initActionCreators;
export const fetchItemsSuccess = actions.fetchItemsSuccess;
export const fetchItemsFailed = actions.fetchItemsFailed;
export const updateItemSuccess = actions.updateItemSuccess;
export const directUpdateSuccess =
  actions.directUpdateSuccess;
export const directUpdateFailed =
  actions.directUpdateFailed;
export const newItem = actions.newItem;
export const newCancel = actions.newCancel;
export const newItemSuccess = actions.newItemSuccess;
export const deleteItemSuccess = actions.deleteItemSuccess;
export const refreshPage = actions.refreshPage;
export const createNewItemFieldChange =
  actions.createNewItemFieldChange;
export const middleware = mw;
export const taskReducer = reducer.reducer;
export const defaultTaskState = reducer.defaultDataState;
export const selectItemPages = selectors.selectItemPages;
export const selectItemData = selectors.selectItemData;
export const selectNewItemState =
  selectors.selectNewItemState;
export const initSelectItemsPage =
  selectors.initSelectItemsPage;
export const selectListState = selectors.selectListState;
