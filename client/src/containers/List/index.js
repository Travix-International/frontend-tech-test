import { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import List from '../../components/List';
//import createListState from './selectors';
import initSelectors from './selectors';

export default ({
  Item,
  Paging,
  dataActions,
  initSelectItemsPage,
  selectListState,
}) => {
  const createListState = initSelectors(selectListState);
  const { fetchItems } = dataActions;
  const mapStateToProps = () => {
    const selectPage = initSelectItemsPage();
    return createListState(selectPage);
  };
  const mapDispatchToProps = {
    fetchItems,
  };
  const ComponentWrapper = (Item, Paging) => {
    const MyList = List(Item, Paging);
    //useEffect has to be in a named variable or a named function
    // function WrappedList(props){...} would work as well
    // return props => {...} would not work though
    const WrappedList = props => {
      const {
        result: { loading },
        page: { current },
        fetchItems,
      } = props;
      useEffect(() => {
        fetchItems(current);
      }, [fetchItems, current, loading]);
      return MyList(props);
    };
    return WrappedList;
  };
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(memo(ComponentWrapper(Item, Paging)));
};

export const defaultListState = {
  page: { current: 1 },
  list: {
    edit: {},
    directUpdate: {},
    remove: {},
  },
};
