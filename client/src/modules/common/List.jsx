import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/lib/ListGroup';

export default class List extends React.Component {
  static propTypes = {
    renderListItem: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  get listItems() {
    const { items, renderListItem } = this.props;

    return items.map(item => renderListItem(item));
  }

  render() {
    return (
      <ListGroup className={this.props.className}>
        {this.listItems}
      </ListGroup>
    );
  }
}
