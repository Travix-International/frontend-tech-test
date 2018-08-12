import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, editItem } from './../../store/actions/actions';
import { List, ListItem, ListDivider } from 'react-toolbox/lib/list';
import { Button } from 'react-toolbox/lib/button';
import Checkbox from 'react-toolbox/lib/checkbox';
import { Link } from 'react-router-dom';
import styles from './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.onChangeTodoState = this.onChangeTodoState.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.props.getItems();
  }

  onChangeTodoState(done, data) {
    const body = {
      ...data,
      done
    }
    this.props.editItem(body);
  }

  deleteItem(evt, id) {
    console.log(evt)
    evt.stopPropagation();
  }
  renderList() {
    return this.props.items && this.props.items.map((item, index) => {
      const itemClass = item.done ? styles.crossed : styles.link;
      const doneBox = [<Checkbox checked={item.done} onChange={evt => this.onChangeTodoState(evt, item)} key={item.id}/>];
      const btnDelete = [
        <Button primary icon="delete" onClick={evt => this.deleteItem(evt, item.id)} floating mini key={item.id} />
      ];
      return (
        <Link key={item.title} to={`/item/${item.id}`}>
          <ListItem
            caption={item.title}
            legend={item.description}
            leftActions={doneBox}
            rightActions={btnDelete}
            className={itemClass}
          />
          <ListDivider />
        </Link>);
    });
  }
  render() {
    return (
      <List ripple selectable>
        {this.renderList()}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getItems()),
  editItem: data => dispatch(editItem(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);