import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, editItem } from './../../store/actions/actions';
import { List, ListItem, ListDivider, ListItemText } from 'react-toolbox/lib/list';
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

  onChangeTodoState(done, data) {
    const body = {
      ...data,
      done
    }
    console.log(body)
    this.props.editItem(body);
  }

  deleteItem(evt, id) {
    evt.stopPropagation();
    console.log(evt)
  }
  renderList() {
    return this.props.items.tasks && this.props.items.tasks.map((item, index) => {
      const itemClass = item.done ? styles.crossed : styles.link;
      const icon = [<Checkbox checked={item.done} onChange={evt => this.onChangeTodoState(evt, item)} key={item.id}/>];
      const btn = [<Button primary icon="delete" onClick={evt => this.deleteItem(evt, item.id)} floating mini key={item.id}/>];
      return (
        <div key={item.title}>
          <ListItem
            caption={item.title}
            legend={item.description}
            leftActions={icon}
            rightActions={btn}
            className={itemClass}
            to={`/item/${item.id}`}
            key={item.title}
          />
          <ListDivider />
        </div>);
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
  getItems: () => dispatch(getItems()),
  editItem: data => dispatch(editItem(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);