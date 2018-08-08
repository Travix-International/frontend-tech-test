import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from './../../store/actions/actions';
import Button from './../ui/Button';
import List from '../ui/List';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.onChangeTodoState = this.onChangeTodoState.bind(this);
  }

  state = {
    items: [
      {
        name: "TODO",
        description: "TODO",
        done: false
      },

      {
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

  renderList() {
    const items = this.state.items.map((item) => {
      const spanClass = item.done ? "item_name item_name--done" : "item_name";
      return (
        <div className="item_block">
          <div className="item_left">
            <input type="checkbox" className="item_checkbox" onChange={this.onChangeTodoState} checked={item.done}/>
            <span className={spanClass}>{item.name}</span>
          </div>
          <div className="item_right">
            <Button text="x" onClick={this.deleteItem} />
          </div>
        </div>
      );
    });
    return <List items={items} className="list--todos"/>
  }
  render() {
    return (
      <div>
        {this.renderList()}
      </div>
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