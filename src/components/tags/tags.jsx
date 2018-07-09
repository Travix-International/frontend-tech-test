import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Chip from 'react-toolbox/lib/chip';

import styles from './tags.css';

class Tags extends Component {
  static propTypes = {
    tags: PropTypes.array,
    unsetTag: PropTypes.func,
    clearTags: PropTypes.func
  }

  render() {
    const { tags, unsetTag } = this.props;
    return (
      <div styleName='container'>
        <ul styleName='list'>
          {
            tags.map(tag => (
              <li key={ tag }>
                <Chip
                  deletable
                  onDeleteClick={ unsetTag.bind(null, tag) }
                  styleName='tag'
                >{ tag }</Chip>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default CSSModules(Tags, styles);