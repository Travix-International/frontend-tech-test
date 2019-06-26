import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CircularProgress from '@material-ui/core/CircularProgress';

export default (Item, Paging) => props => {
  const {
    result: { error, loading, data },
    page: { current, total },
    edit,
    remove,
    directUpdate,
    cols,
  } = props;
  let listContent;
  if (error) {
    listContent = <div>Something wrong:{error}</div>;
  }
  if (loading) {
    listContent = (
      <div>
        <CircularProgress />
      </div>
    );
  }
  if (!error && !loading) {
    listContent = (
      <GridList cellHeight={320} cols={cols}>
        {data.map(item => (
          <GridListTile key={item.id} cols={1}>
            <Item
              item={item}
              edit={edit}
              remove={remove}
              directUpdate={directUpdate}
              key={item.id}
            />
          </GridListTile>
        ))}
      </GridList>
    );
  }
  return (
    <div>
      <Paging current={current} total={total} />
      {listContent}
      <Paging current={current} total={total} />
    </div>
  );
};
