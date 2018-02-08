import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import VirtualizedList from 'react-virtualized/dist/commonjs/List';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';


class List extends PureComponent {
  componentWillReceiveProps({ data }) {
    if (data !== this.props.data) {
      this.listRef.forceUpdateGrid();
    }
  }

  setRef = ref => {
    this.listRef = ref;
  }

  handleRenderItem = ({ index, style }) => {
    const { data, onRenderItem } = this.props;

    return onRenderItem({ data: data[index], index, style });
  }

  render() {
    const { height, data, rowHeight } = this.props;

    return (
      <AutoSizer>
        {({ width }) => (
          <VirtualizedList
            ref={this.setRef}
            rowRenderer={this.handleRenderItem}
            height={height}
            rowCount={data.length}
            rowHeight={rowHeight}
            width={width}
          />
        )}
      </AutoSizer>
    );
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  rowHeight: PropTypes.number,
  height: PropTypes.number,
  onRenderItem: PropTypes.func.isRequired
};

export default List;
