import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Button from 'react-toolbox/lib/button';

import Filter from '../filter/filter.jsx';
import styles from './header.css';

class Header extends Component {
  static propTypes = {
    showDialog: PropTypes.func,
    unsetActiveTodo: PropTypes.func
  }

  addTodoClick = () => {
    const { showDialog, unsetActiveTodo } = this.props;
    unsetActiveTodo();
    showDialog();
  }

  render() {
    return (
      <header styleName='header'>
        <div styleName='container'>
          <div styleName='top'>
            todos
          </div>
          <div styleName='content'>
            <div styleName='add'>
              <Button
                icon='add'
                label='Add todo'
                raised
                onClick={ this.addTodoClick }
              />
            </div>
            <div styleName='filter'>
              <Filter />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default CSSModules(Header, styles);