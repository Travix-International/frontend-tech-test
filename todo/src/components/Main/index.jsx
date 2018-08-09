import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from './../../store/actions/actions';
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

  state = {
    items: [
      {
        id: 1,
        name: "TODO",
        description: "TODO",
        done: false
      },

      {
        id: 2,
        name: "TODO1",
        description: "TODO1",
        done: true
      }
    ]
  }

  componentDidMount() {
    this.props.getItems();
  }

  onChangeTodoState(evt) {}

  deleteItem(evt, id) {
    evt.preventDefault();
    console.log(id)
  }
  renderList() {
    return this.state.items.map((item, index) => {
      const icon = <Checkbox checked={item.done}/>;
      const btn = [<Button primary icon="delete" onClick={evt => this.deleteItem(evt, item.id)} floating mini />];
      return (<Link to={`/item/${item.id}`} key={`${index}--${item.name}`}>
        <ListItem
          caption={item.name}
          legend={item.description}
          leftIcon={icon}
          rightActions={btn}
          className={styles.link}
        />
        <ListDivider />
      </Link>);
    });
  }
  render() {
    console.log(this.renderList())
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
  getItems: () => {
    dispatch(getItems())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);