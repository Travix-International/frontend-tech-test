import React, { Component } from 'react';
import Button from './../ui/Button';
import List from './../ui/List';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    items: []
  }

  render() {
    return (
      <div>
        <header>
          <Button text="Add" href="/new" />
        </header>
        <section>
          <List items={this.state.items} />
        </section>
      </div>
    );
  }
}