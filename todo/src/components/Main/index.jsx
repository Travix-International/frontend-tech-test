import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from './../../store/actions/actions';
import { Card, CardTitle } from 'react-toolbox/lib/card';
import Checkbox from 'react-toolbox/lib/checkbox';
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
    return this.state.items.map((item, index) => (
        <Card style={{width: '25%'}} key={`${index}--${item.name}`}>
          <CardTitle title={item.name} subtitle={item.description}>
            <Checkbox onChange={this.onChangeTodoState} checked={item.done}/>
          </CardTitle>
        </Card>
      )
    );
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